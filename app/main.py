
from flask import Flask, make_response, request, redirect
from flask_pymongo import pymongo
from bson import json_util
import json
CONNECTION_STRING = "mongodb+srv://root:bobaaserver@cluster0.ap5vvaf.mongodb.net/?retryWrites=true&w=majority"
client = pymongo.MongoClient(CONNECTION_STRING)
db = client.get_database('flask_mongodb_atlas')
    
    
app = Flask(__name__)
# Debt - emi, moratorium ; Invest - high, medium, low ; Loan - common ; Insurance - common

#insurance
# vehicle - idv, year ; health - age, premium ; travel - duration, national/intl ; life - duration, premimum
@app.route("/insurance/<phone>", methods = ['POST', 'GET', 'DELETE'])
def insurance(phone):
    
    if request.method == 'POST':
        type = request.form["type"]
        val1 = request.form["val1"]
        val2 = request.form["val2"]
        #UPDATE CALCULATION
        premium = val1 * val2
        tenure = request.form["tenure"]
        db.insurance.insert_one({"phone": phone, "type" : type, "premium" : premium, "tenure" : tenure})
        return make_response('', 200)
    elif request.method == 'GET':
        records = db['insurance'].find({"phone" : phone})
        if records:
            return make_response(json.loads(json_util.dumps(records)), 200)
        else:
            return make_response({'Data not found'}, 404)
    elif request.method == 'DELETE':
        records = db['insurance'].delete({'phone': phone})

#loan
@app.route("/loan/<phone>", methods = ['POST', 'GET', 'DELETE'])
def loan(phone):
    
    if request.method == 'POST':
        type = request.form["type"]
        amount = request.form["amount"]
        tenure = request.form["tenure"]
        #UPDATE CALCULATION
        bob = {"amount" : amount, "interest" : interest, "tenure" : tenure, "condition" : conditino}
        hdfc = {"amount" : amount, "interest" : interest, "tenure" : tenure, "condition" : conditino}
        sbi = {"amount" : amount, "interest" : interest, "tenure" : tenure, "condition" : conditino}
        db.loan.insert_one({"phone": phone, "type" : type, "bob" : bob, "hdfc" : hdfc, "sbi" : sbi})
        return make_response('', 200)
    elif request.method == 'GET':
        records = db['loan'].find({"phone" : phone})
        if records:
            return make_response(json.loads(json_util.dumps(records)), 200)
        else:
            return make_response({'Data not found'}, 404)
    elif request.method == 'DELETE':
        records = db['loan'].delete({'phone': phone})


#invest page
@app.route("/invest/<phone>", methods = ['POST', 'GET', 'DELETE'])
def invest(phone):
    
    if request.method == 'POST':
        risk = request.form["risk"]
        cost = request.form["cost"]
        nod = request.form["nod"]
        #UPDATE CALCULATION
        totalamt = cost
        percinvest = cost
        primary = {"name" : "recurring deposit", "value" : "75K", "perc" : "50%"}
        secondary = {"name" : "term deposit", "value" : "60K", "perc" : "40%"}
        tertiary = {"name" : "mutual funds", "value" : "15K", "perc" : "10%"}
        db.invest.insert_one({"phone": phone, "risk" : risk, "total" : total, "percinvest" : percinvest, "primary" : primary, "secondary" : secondary, "tertiary" : tertiary})
        return make_response('', 200)
    elif request.method == 'GET':
        records = db['invest'].find({"phone" : phone})
        if records:
            return make_response(json.loads(json_util.dumps(records)), 200)
        else:
            return make_response({'Data not found'}, 404)
    elif request.method == 'DELETE':
        records = db['invest'].delete({'phone': phone})

#Debt page, moratorium tab
@app.route("/moratorium/<phone>", methods = ['POST', 'GET', 'DELETE'])
def moratorium(phone):
    
    if request.method == 'POST':
        principal = request.form["principal"]
        interest = request.form["interest"]
        duration = request.form["duration"]
        newEmi = principal * interest * duration #UPDATE CALCULATION
        db.moratorium.insert_one({"phone": phone, "newEmi" : newEmi})
        return make_response('', 200)
    elif request.method == 'GET':
        records = db['moratorium'].find({"phone" : phone})
        if records:
            return make_response(json.loads(json_util.dumps(records)), 200)
        else:
            return make_response({'Data not found'}, 404)
    elif request.method == 'DELETE':
        records = db['moratorium'].delete({'phone': phone})

#Debt page, emi tab
@app.route("/emi/<phone>", methods = ['POST', 'GET', 'DELETE'])
def emi(phone):
    
    if request.method == 'POST':
        principal = request.form["principal"]
        interest = request.form["interest"]
        tenure = request.form["tenure"]
        p = principal
        r = interest/1200
        n = tenure
        emi = (p*r*pow((1+r),n)) / (pow((1+r),n)-1)
        db.emi.insert_one({"phone" : phone,"interest": interest, "tenure": tenure, "emi": emi})
        return make_response('', 200)
    elif request.method == 'GET':
        records = db['emi'].find({"phone" : phone})
        if records:
            return make_response(json.loads(json_util.dumps(records)), 200)
        else:
            return make_response({'Data not found'}, 404)
    elif request.method == 'DELETE':
        records = db['emi'].delete({'phone': phone})

# Home page, goals tab 
@app.route("/info/<phone>", methods = ['POST', 'GET', 'DELETE'])
def info(phone):
    
    if request.method == 'POST':
        action = request.form["action"]
        compare = request.form["compare"]
        value = request.form["value"]
        db.info.insert_one({"phone" : phone, "action": action, "compare": compare, "value":value})
        return make_response('', 200)
    elif request.method == 'GET':
        records = db['info'].find({"phone" : phone})
        if records:
            return make_response(json.loads(json_util.dumps(records)), 200)
        else:
            return make_response({'Data not found'}, 404)
    elif request.method == 'DELETE':
        records = db['info'].delete({'phone': phone})


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
