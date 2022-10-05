from http import client
from xml.etree.ElementTree import XML
from flask import Flask
import pymongo
from pymongo import MongoClient
from dataClass.Comment import Comment
import datetime

cluster = MongoClient("somerandomstring",connect=False)

def addComments(data_entries):
    db = cluster["WebpageCommentDatabase"]
    collection = db["CommentContent"]
    print("connected to add",cluster,collection)
    for post in data_entries:
        collection.insert_one(post)

def addComment(userid, content):
    post = {}
    post["userid"] = userid
    post["content"] = content 
    post["upvote"] = 0
    post["date"] = str(datetime.datetime.now())
    db = cluster["WebpageCommentDatabase"]
    collection = db["CommentContent"]
    print("connected to add",cluster,collection)
    collection.insert_one(post)
    return post

def readComments(col,val):
    db = cluster["WebpageCommentDatabase"]
    collection = db["CommentContent"]
    print("connected to read",cluster,collection)
    x = collection.find({col: val})
    res = []
    for data in x:
        res.append(data)
    return res 

def makeComments():
    cs = [Comment(str(id),"2022-10-03","Hello from comment",3) for id in range(10)]
    dataAll = []
    for c in cs:
        data = {
            "userid":c.userId,
            "date":c.date, 
            "content":c.content,
            "upvote":c.upvote,
            }
        dataAll.append(data)
    return dataAll
