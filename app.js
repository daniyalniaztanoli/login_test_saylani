document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    if (name === '' || email === '' || password === '') {
      alert("Please enter all fields");
    } else {
      alert(`Account created successfully for ${name}`);
      var userData = {
        name: name,
        email: email,
        password: password
      };
      let savedData = JSON.parse(localStorage.getItem('formDataArray')) || [];
      savedData.push(userData);
      localStorage.setItem('formDataArray', JSON.stringify(savedData));
      console.log(savedData);
    }

    document.getElementById('myForm').reset();
  });

  document.getElementById('myloginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let loginemail = document.getElementById('loginemail').value;
    let loginpassword = document.getElementById('loginpassword').value;

    let savedData = JSON.parse(localStorage.getItem('formDataArray')) || [];

    let foundUser = savedData.find(user => user.email === loginemail && user.password === loginpassword);

    if (foundUser) {
      alert(`Logged in successfully as ${foundUser.name}`);
    } else {
      alert("Invalid email or password");
    }

    document.getElementById('myloginForm').reset();
  });