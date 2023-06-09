function studentReducer1(studentList, action) {
  if (action.type === "added") {
    return [
      ...studentList,
      {
        id: action.id,
        name: action.name,
        done: false,
      },
    ];
  } else if (action.type === "changed") {
    return studentList.map((s) => {
      if (s.id === student.id) {
        return student;
      } else {
        return s;
      }
    });
  } else if (action.type === "deleted") {
    return studentList.filter((s) => s.id !== studentId);
  } else {
    throw Error("Unknwon action: " + action.type);
  }
}

export default function studentReducer(studentList, action) {
  switch (action.type) {
    case "added": {
      return [
        ...studentList,
        {
          id: action.id,
          name: action.name,
          done: false,
        },
      ];
    }
    case "changed": {
      return studentList.map((s) => {
        if (s.id === student.id) {
          return student;
        } else {
          return s;
        }
      });
    }
    case "deleted": {
      return studentList.filter((s) => s.id !== studentId);
    }
    default: {
      throw Error("Unknwon action: " + action.type);
    }
  }
}
