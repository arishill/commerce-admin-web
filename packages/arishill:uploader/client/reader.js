// definitions
Reader = {};

/* READER
.................................................*/
Reader.getSimplePost = function(file, token, callback) {
  callback({
    timeout: 5000,
    content: file,
    headers: {
      'Content-Type': file.type,
      "Authorization": "Bearer " + token
    }
  });
};

Reader.getResumablePut = function(file, token, callback) {
  callback({
    timeout: 5000,
    content: file,
    headers: {
      'Content-Type': file.type,
      "Authorization": "Bearer " + token
    }
  });
};
