const fs = require('fs');

function splitBy(column, csv, columnToList) {
  function Content(name) {
    this.name = name;
    this.list = [];
  }

  const contents = [];
  const lines = csv;
  const index = lines[0].split(',').indexOf(column);
  const cIndex = lines[0].split(',').indexOf(columnToList);
  for (let i = 1; i < lines.length; i += 1) {
    const row = lines[i].split(',');
    const columnValue = row[index];
    let content = contents.find(
      (content) => content.name === columnValue,
    );
    if (!content) {
      content = new Content(columnValue);
      contents.push(content);
    }
    content.list.push(row[cIndex]);
  }
  return contents;
}

function countStudents(dbPath) {
  try {
    const data = fs.readFileSync(dbPath);
    const students = data.toString().split('\n');
    console.log(`Number of students: ${students.length - 1}`);
    const contents = splitBy('field', students, 'firstname');
    contents.forEach(
      (content) => {
        const n = content.name;
        const l = content.list;
        const msg = `Number of students in ${n}: ${l.length}. List: ${l.join(', ')}`;
        console.log(msg);
      },
    );
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
