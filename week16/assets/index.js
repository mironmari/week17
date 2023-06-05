const userName = document.getElementById('user');
const userLink = document.getElementById('link1');
const comment = document.getElementById('comment-text');
let now = new Date();
const yesImput = document.getElementById('yes');
const noImput = document.getElementById('no');
let formUser = document.getElementById('form');


function showComment(name, imageSrc, time, text) {
  const commentbox = document.createElement("div");
  commentbox.classList.add("comment");

  const nametext = document.createElement("p");
  nametext.textContent = name;
  nametext.classList.add("comment__name");

  const image = document.createElement("img");
  image.src = imageSrc;
  image.classList.add("comment__avatar");

  const postTime = document.createElement("span");
  postTime.textContent = time;
  postTime.classList.add("time");

  const comment = document.createElement("p");
  comment.textContent = text;
  comment.classList.add("comment__text");

  const container = document.querySelector(".container_result");
  container.append(commentbox);
  commentbox.append(image);
  commentbox.append(nametext);
  nametext.append(postTime);
  commentbox.append(comment);
}


function formatName(str) {
  if (yesImput.checked) {
    const result = str.trim();

    if (result === "") {
        return "username"
    }
    let resultName = result.split(" ");
    resultName = resultName.map(
        (element) => element[0].toUpperCase() + element.slice(1).toLowerCase()
    );
   return resultName.join(" ");}
   else { };
}

const arrayAvatars = [
  "https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-a-cigarette_52683-34828.jpg?w=740&t=st=1685835096~exp=1685835696~hmac=1c88fd3b11480a143174eb29af4f4b6c17d83f382832e288c7e0c176f39a1ec8",
  "https://cdn-icons-png.flaticon.com/512/727/727399.png?w=740&t=st=1685835123~exp=1685835723~hmac=483b476f5cd0871e9262f56412a0a9c90e4005949bf34caf9a42dc3a4f29c15c",
  "https://img.freepik.com/premium-psd/user-3d-icon_642950-57.jpg?w=740",
  "https://img.freepik.com/free-photo/blue-user-icon-symbol-or-website-admin-social-login-element-concept-on-white-background-3d-rendering_56104-1217.jpg?w=1060&t=st=1685835212~exp=1685835812~hmac=7c13b71af643d19807ff8979862d0be6befe3812d071051e6b1a87c25598b387",
  "https://cdn-icons-png.flaticon.com/512/94/94753.png?w=740&t=st=1685835233~exp=1685835833~hmac=684973c408c91f9d2efb5fb5c67d16a9dd08aa63b4ac093b939a841b9a17adce"
];

function showAvatar(link, array) {
  if (link.value === "") {
    position = Math.floor(Math.random() * array.length);
    return array[position];
  } else {
    return link.value;
  }
}

function checkSpam(str) {
    let word = /виагра/gi;
    return str.replace(word, "***");
  }


formUser.addEventListener("submit", (event) => {
  event.preventDefault();

  const formatedName = formatName(userName.value);
  const avatar = showAvatar(userLink, arrayAvatars);
  const postingTime = now.toLocaleString('ru-RU');
  const formattedComment = checkSpam(comment.value);

  showComment(formatedName, avatar, postingTime, formattedComment);

   formUser.reset();

});
