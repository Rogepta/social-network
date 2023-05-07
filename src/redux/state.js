let store = {
  _state: {
    profilePage: {
      postsData: [
        { id: 1, message: "Hi, How are you?", likeCounter: 15 },
        { id: 2, message: "Hello, It is Lana!", likeCounter: 228 },
        { id: 2, message: "Hello, How are you!", likeCounter: 228 },
        { id: 2, message: "Hello, It is Lana!", likeCounter: 228 },
        { id: 2, message: "Hello, It is Lana Rhoades!", likeCounter: 228 },
      ],
      newPostText: "sobaka",
    },
    dialogsPage: {
      dialogs: [
        {
          id: 1,
          name: "Danil",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDz1Vh9fu1bGPCPMjyNs0HlIvS18AboZHujg&usqp=CAU",
        },
        {
          id: 2,
          name: "Nikita",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQulgivFTSqNTONfnimTAdG4Zm7mn2m5CO9ig&usqp=CAU",
        },
        {
          id: 3,
          name: "Dima",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmvzqddflOiIAtyCCDw1d5iIVJE9-e7Y3jvg&usqp=CAU",
        },
        {
          id: 4,
          name: "Kolya",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRpZihhsRCYkZ-WUL4-4dMT655aII3H6eOYg&usqp=CAU",
        },
      ],
      messages: [
        { message: "Kolya kozel" },
        { message: "Nikita chert" },
        { message: "Danil tvar`" },
        { message: "Dima paskyda" },
      ],
    },
  },
  getState() {
    return this._state;
  },
  rerenderEntireTree() {
    console.log("State changed");
  },
  addPost() {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likeCounter: 0,
    };
    this._state.profilePage.postsData.push(newPost);
    this._state.profilePage.newPostText = "";
    this.rerenderEntireTree(this._state);
  },
  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this.rerenderEntireTree(this._state);
  },
  subscribe(observer) {
    this.rerenderEntireTree = observer;
  },
};

export default store;
