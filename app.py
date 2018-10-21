from flask import Flask, render_template, request
app = Flask(__name__)
import pyodbc 
app.debug = True

@app.route("/")
def main():
    data =()
    
    start_date = request.args.get("start_date",None)
    end_date = request.args.get("end_date",None)
    data = ()
    
    cnxn = pyodbc.connect(driver='{SQL Server Native Client 11.0}', host='localhost', database='abc',
                      trusted_connection='yes')
    cursor = cnxn.cursor()
    
    if start_date and end_date:
        start_date = start_date.replace('-','')
        end_date = end_date.replace('-','')
        cursor.execute("SELECT * from "+TABLE_NAME+" where  nyc_date  > "+start_date+" and nyc_date < "+end_date )
        data = cursor.fetchall()
    else:
        data = cursor.execute('SELECT * FROM UserTable')
    return render_template('index.html',data=data)


if __name__ == "__main__":
    app.run(port=5000)