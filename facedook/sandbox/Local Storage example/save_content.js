
window.onload = function() {
	if(localStorage.getItem('cam_status')) {
    document.querySelector('.cam_status').innerHTML = localStorage.getItem('cam_status');
  }
}

let editBtn_cam_status = document.querySelector('#edit_cam_status');

//edit button error catching
if (editBtn_cam_status)
  console.log("found the cam_status edit button");
  else {
    console.log("can't find the cam_status edit button!");
  }

let cam_status = document.querySelector('.cam_status');

//edit button error catching
if (cam_status)
  console.log("found cam_status");
  else {
    console.log("can't find cam_status!");
  }

editBtn_cam_status.addEventListener('click', () => {

  localStorage.setItem('cam_status', updateContent(cam_status));

});
