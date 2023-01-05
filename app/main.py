
from flask import Flask, make_response, request, redirect
from flask_pymongo import pymongo
from bson import json_util
import json

CONNECTION_STRING = "mongodb+srv://root:bobaaserver@cluster0.ap5vvaf.mongodb.net/?retryWrites=true&w=majority"
client = pymongo.MongoClient(CONNECTION_STRING)
db = client.get_database('flask_mongodb_atlas')
    
    
app = Flask(__name__)


@app.route("/redirect", methods = ['POST'])
def add_redirect():
    
    if request.method == 'POST':
        path = request.form["path"]
        name = request.form["name"]
        db.redirects.insert_one({"name": name, "path": path})
        return make_response('', 200)

 
@app.route("/redirect/<name>")
def get_redirect(name):
    
    record = db['redirects'].find_one({'name': name})
    if record:
        return redirect(record['path'])
    else:
        return make_response('', 404)
 
 
@app.route("/goals", methods = ['POST', 'GET'])
def goals():
    
    if request.method == 'POST':
        source = request.form["source"]
        action = request.form["action"]
        comparision = request.form['comparision']
        db.goals.insert_one({"source": source, "action": action, "comparision": comparision})
        return make_response('', 200)
    elif request.method == 'GET':
        records = db['goals'].find({})
        if records:
            return make_response(json.loads(json_util.dumps(records)), 200)
        else:
            return make_response({'Data not found'}, 404)

 
@app.route("/escorw", methods = ['POST', 'GET'])
def escrow():
    
    if request.method == 'POST':
        client1 = request.form["client1"]
        client2 = request.form["client2"]
        cost = request.form['cost']
        share_name = request.form['share_name']
        db.escrow.insert_one({"client1": client1, "client2": client2, "cost": cost, "share_name": share_name})
        return make_response('', 200)
    elif request.method == 'GET':
        records = db['escrow'].find({})
        if records:
            return make_response(json.loads(json_util.dumps(records)), 200)
        else:
            return make_response({'Data not found'}, 404)


@app.route("/rewards", methods = ['POST', 'GET'])
def rewards():
    
    if request.method == 'POST':
        name = request.form["name"]
        code = request.form["code"]
        amount = request.form['amount']
        description = request.form['description']
        db.rewards.insert_one({"name": name, "code": code, "amount": amount, "description": description})
        return make_response('', 200)
    elif request.method == 'GET':
        records = db['rewards'].find({})
        if records:
            return make_response(json.loads(json_util.dumps(records)), 200)
        else:
            return make_response({'Data not found'}, 404)
