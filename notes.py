from flask import Flask, jsonify, json, request, Response
import os
app = Flask(__name__)

allnotes = []
index = 0

@app.route('/notes', methods=['GET', 'POST', 'OPTIONS'])
def notes():
  if request.method == 'GET':
    return get_all_notes()
  elif request.method == 'POST':
    return create_note(json.loads(request.data))

@app.route('/notes/<int:id>', methods=['GET', 'PUT'])
def notes_id(id):
  if request.method == 'GET':
    return get_note(id)
  elif request.method == 'PUT':
    return update_note(id, json.loads(request.data))

@app.route('/web/<filename>')
def get_files(filename):
  file = 'web/' + filename.encode('utf8')
  fin = open(file, "rb")
  size = os.path.getsize(file)
  headers = [
    ('Content-Type','application/zip'),
    ('Content-Length', str(size)),
    ('Content-Disposition', 'attachment;filename=' + file)
  ]
  status = 'FileDownload'

  return (status, headers, fin)


def get_all_notes():
  global allnotes
  return Response(json.dumps(allnotes), mimetype='application/json')

def create_note(note):
  global allnotes
  global index
  note['id'] = index
  allnotes.append(note)
  index = index + 1
  return jsonify(allnotes[len(allnotes)-1])

def update_note(id, note):
  global allnotes
  allnotes[id] = note
  return jsonify(allnotes[id])

def get_note(id):
  global allnotes
  return jsonify(allnotes[id])

if __name__ == '__main__':
  app.debug = True
  app.run()


