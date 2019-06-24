import os

def setXp(UserID, toSet):
    os.system("npm start -- setXp " + UserID + " " + int(toSet))

def setLevel(UserID, toSet):
    os.system("npm start -- setLevel " + UserID + " " + int(toSet))

def addXp(UserID, toAdd):
    os.system("npm start -- addXp " + UserID + " " + int(toAdd))

def addLevel(UserID, toAdd):
    os.system("npm start -- addLevel " + UserID + " " + int(toAdd))

def Leaderboard(limit, UserID):
    os.system("npm start -- Leaderboard " + int(limit) + " " + UserID)

def Fetch(UserID):
    os.system("npm start -- Fetch " + UserID)

def Delete(UserID):
    os.system("npm start -- delete " + UserID)
