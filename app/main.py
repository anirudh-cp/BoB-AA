
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
# vehicle - idv, year ; health - age, premium ; travel - duration, premium ; life - duration, premimum
@app.route("/insurance/<phone>", methods = ['POST', 'GET', 'DELETE'])
def insurance(phone):
    
    if request.method == 'POST':
        type = request.form["type"]
        val1 = float(request.form["val1"]) # Vehicle - idv , Health - Age , Travel - Duration , Life - Duration
        val2 = float(request.form["val2"]) # Vehicle - years , Health - premium , Travel - premium , Life - premium
        #UPDATE CALCULATION
        if(type == "Vehicle"):
            premium = val1 * 0.02
            coverage = val1 * 0.2
        if(type == "Health"):
            premium = val2 + 0.02*val2
            coverage = premium*10.345
        if(type == "Travel"):
            premium = val2 - 0.032*val2
            coverage = premium*val1*1.212
        if(type == "Life"):
            premium = val2 - 0.12*val2
            coverage = premium * val1 * 4.221
        db.insurance.insert_one({"phone": phone, "type" : type, "premium" : premium, "coverage" : coverage})
        return make_response('', 200)
    elif request.method == 'GET':
        records = db['insurance'].find({"phone" : phone})
        if records:
            return make_response(json.loads(json_util.dumps(records)), 200)
        else:
            return make_response({'Data not found'}, 404)
    elif request.method == 'DELETE':
        records = db['insurance'].delete_many({'phone': phone})

#loan
@app.route("/loan/<phone>", methods = ['POST', 'GET', 'DELETE'])
def loan(phone):
    
    if request.method == 'POST':
        type = request.form["type"]
        amount = int(request.form["amount"])
        tenure = request.form["tenure"]
        #UPDATE CALCULATION
        bob = {"amount" : amount, "interest" : "7.8%", "tenure" : tenure, "condition" : "negotiable"}
        hdfc = {"amount" : amount-0.2*amount, "interest" : "6.9%", "tenure" : tenure, "condition" : "negotiable"}
        sbi = {"amount" : amount, "interest" : "6.9%", "tenure" : tenure, "condition" : "Non-negotiable"}
        db.loan.insert_one({"phone": phone, "type" : type, "bob" : bob, "hdfc" : hdfc, "sbi" : sbi})
        return make_response('', 200)
    elif request.method == 'GET':
        records = db['loan'].find({"phone" : phone})
        if records:
            return make_response(json.loads(json_util.dumps(records)), 200)
        else:
            return make_response({'Data not found'}, 404)
    elif request.method == 'DELETE':
        records = db['loan'].delete_many({'phone': phone})


#invest page
@app.route("/invest/<phone>", methods = ['POST', 'GET', 'DELETE'])
def invest(phone):
    
    if request.method == 'POST':
        total = float(request.form["total"])
        risk = request.form["risk"]
        costofliving = float(request.form["costofliving"])
        nod = float(request.form["nod"])
        #UPDATE CALCULATION
        cost = nod*12000 + 20000
        x = 1.25*costofliving
        t = total
        val = t-1.5*x
        if(cost > (t-x)):
            message = "Decrease cost of living to " + str(val)
        if(total<500000):
            if(risk == "Low"):
                p = 0.5*val
                s = 0.4*val
                t = 0.1*val
                primary = {"name" : "Recurring Deposit", "value" : p, "perc" : "50%"}
                secondary = {"name" : "National Pension Scheme", "value" : s, "perc" : "40%"}
                tertiary = {"name" : "Term Deposit/Mutual Fund", "value" : t, "perc" : "10%"}
            if(risk == "Medium"):
                p = 0.3*val
                s = 0.4*val
                t = 0.3*val
                primary = {"name" : "Recurring Deposit", "value" : p, "perc" : "30%"}
                secondary = {"name" : "National Pension Scheme", "value" : s, "perc" : "40%"}
                tertiary = {"name" : "Term Deposit/Mutual Fund", "value" : t, "perc" : "30%"}
            if(risk == "High"):
                p = 0.4*val
                s = 0.2*val
                t = 0.4*val
                primary = {"name" : "National Pension Scheme", "value" : p, "perc" : "40%"}
                secondary = {"name" : "Term Deposit/Mutual Fund", "value" : s, "perc" : "20%"}
                tertiary = {"name" : "Equities", "value" : t, "perc" : "40%"}
        #FOR INCOME BETWEEN 5L AND 10L
        if(total>500000 and total<1000000):
            if(risk == "Low"):
                p = 0.5*val
                s = 0.4*val
                t = 0.1*val
                primary = {"name" : "Recurring Deposit/NPS", "value" : p, "perc" : "50%"}
                secondary = {"name" : "Term Deposit", "value" : s, "perc" : "40%"}
                tertiary = {"name" : "Mutual Fund", "value" : t, "perc" : "10%"}
            if(risk == "Medium"):
                p = 0.3*val
                s = 0.4*val
                t = 0.3*val
                primary = {"name" : "National Pension Scheme", "value" : p, "perc" : "30%"}
                secondary = {"name" : "Term Deposit", "value" : s, "perc" : "40%"}
                tertiary = {"name" : "Mutual Fund/Equities", "value" : t, "perc" : "30%"}
            if(risk == "High"):
                p = 0.4*val
                s = 0.2*val
                t = 0.4*val
                primary = {"name" : "NPS/Term Deposit", "value" : p, "perc" : "40%"}
                secondary = {"name" : "Mutual Fund", "value" : s, "perc" : "20%"}
                tertiary = {"name" : "Equities", "value" : t, "perc" : "40%"}
        #FOR INCOME BETWEEN GREATER THAN 10L
        if(total>1000000):
            if(risk == "Low"):
                p = 0.5*val
                s = 0.4*val
                t = 0.1*val
                primary = {"name" : "National Pension Scheme", "value" : p, "perc" : "50%"}
                secondary = {"name" : "Term Deposit", "value" : s, "perc" : "40%"}
                tertiary = {"name" : "Equities", "value" : t, "perc" : "10%"}
            if(risk == "Medium"):
                p = 0.3*val
                s = 0.4*val
                t = 0.3*val
                primary = {"name" : "Recurring Deposit/NPS", "value" : p, "perc" : "30%"}
                secondary = {"name" : "Mutual Fund", "value" : s, "perc" : "40%"}
                tertiary = {"name" : "Equities", "value" : t, "perc" : "30%"}
            if(risk == "High"):
                p = 0.4*val
                s = 0.2*val
                t = 0.4*val
                primary = {"name" : "Term Deposit/Mutual Fund", "value" : p, "perc" : "40%"}
                secondary = {"name" : "Mutual Fund/Equities", "value" : s, "perc" : "20%"}
                tertiary = {"name" : "Equities", "value" : t, "perc" : "40%"}                
        percinvest = (val/total)*100
        db.invest.insert_one({"phone": phone, "risk" : risk, "total" : total, "percinvest" : percinvest, "primary" : primary, "secondary" : secondary, "tertiary" : tertiary})
        return make_response('', 200)
    elif request.method == 'GET':
        records = db['invest'].find({"phone" : phone})
        if records:
            return make_response(json.loads(json_util.dumps(records)), 200)
        else:
            return make_response({'Data not found'}, 404)
    elif request.method == 'DELETE':
        records = db['invest'].delete_many({'phone': phone})

#Debt page, moratorium tab
@app.route("/moratorium/<phone>", methods = ['POST', 'GET', 'DELETE'])
def moratorium(phone):
    
    if request.method == 'POST':
        principal = float(request.form["principal"])
        interest = float(request.form["interest"])
        duration = float(request.form["duration"])
        tenure = float(request.form["tenure"])
        emi = float(request.form["emi"])
        n = tenure*12
        r = interest/1200
        balance =  (principal * ((1+r)**n)) - (emi/r (((1+r)**n)-1))
        newEmi = balance * ((1+r)**duration) - balance
        db.moratorium.insert_one({"phone": phone, "newEmi" : newEmi})
        return make_response('', 200)
    elif request.method == 'GET':
        records = db['moratorium'].find({"phone" : phone})
        if records:
            return make_response(json.loads(json_util.dumps(records)), 200)
        else:
            return make_response({'Data not found'}, 404)
    elif request.method == 'DELETE':
        records = db['moratorium'].delete_many({'phone': phone})

#Debt page, emi tab
@app.route("/emi/<phone>", methods = ['POST', 'GET', 'DELETE'])
def emi(phone):
    
    if request.method == 'POST':
        principal = float(request.form["principal"])
        interest = float(request.form["interest"])
        tenure = float(request.form["tenure"])
        p = principal
        r = interest/1200
        n = tenure*12
        emi = (p*r*((1+r)**n)) / (((1+r)**n)-1)
        db['emi'].delete_one({'phone': phone})
        db.emi.insert_one({"phone" : phone,"interest": interest, "tenure": tenure, "emi": emi})
        return make_response('', 200)
    elif request.method == 'GET':
        records = db['emi'].find({"phone" : phone})
        if records:
            return make_response(json.loads(json_util.dumps(records)), 200)
        else:
            return make_response({'Data not found'}, 404)
    elif request.method == 'DELETE':
        records = db['emi'].delete_many({'phone': phone})

# Home page, goals tab 
@app.route("/info/<phone>", methods = ['POST', 'GET', 'DELETE'])
def info(phone):
    
    if request.method == 'POST':
        action = request.form["action"]
        compare = request.form["compare"]
        value = request.form["value"]
        category = request.form['category']
        db.info.insert_one({"phone" : phone, "action": action, "compare": compare, "value":value, 'category': category})
        return make_response('', 200)
    elif request.method == 'GET':
        records = db['info'].find({"phone" : phone})
        if records:
            return make_response(json.loads(json_util.dumps(records)), 200)
        else:
            return make_response({'Data not found'}, 404)
    elif request.method == 'DELETE':
        records = db['info'].delete_many({'phone': phone})


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
