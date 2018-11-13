const initiState = {
  posts: [
    {id: '1', title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit', body: 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto'},
    {id: '1', title: 'qui est esse', body: 'est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla'},
    {id: '1', title: 'eum et est occaecati', body: 'ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit'}
  ]
}

const rootReducer = (state = initiState, action) => {
  console.log(action);
  if (action.type === 'DELETE_POST') {
    let newPosts = state.posts.filter((post) => {
      return action.id !== post.id;
    });
    return {
      ...state, 
      posts: newPosts
    }
  } 
  return state;
};

export default rootReducer;