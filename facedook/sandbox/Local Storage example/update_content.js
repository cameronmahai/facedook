function updateContent (content)  {

  content.contentEditable = !content.isContentEditable;

  //logging
  console.log("registered an edit button click for [content name]" );

  if(content.contentEditable === 'false') {
    localStorage.setItem('content', content.innerHTML);
    console.log(localStorage.key(0));
    console.log(localStorage.key(1));
    console.log(localStorage.key(2));
    console.log(localStorage.key(3));
    console.log(localStorage.key(4));
    console.log(localStorage.key(5));
    console.log(localStorage.key(6));
    console.log(localStorage.getItem('cam_status'));
    // console.log(content.innerHTML);
    console.log("updated local storage for [content name]");
  }

  return content.innerHTML;

}
