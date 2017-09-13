const defaultState = {
  posts: [],
  post: {},
  loading: false,
  errors: {},
};

export default (state = defaultState, action = {}) => {
  switch (action.type) {
    case 'FETCH_POSTS_FULFILLED': {
      return {
        ...state,
        posts: action.payload.data,
        loading: false,
        errors: {},
      };
    }

    case 'FETCH_POSTS_PENDING': {
      return {
        ...state,
        loading: true,
        errors: {},
      };
    }

    case 'FETCH_POSTS_REJECTED': {
      return {
        ...state,
        loading: false,
        errors: { global: action.payload.message },
      };
    }

    case 'NEW_POST': {
      return {
        ...state,
        post: { },
      };
    }

    case 'SAVE_POST_PENDING': {
      return {
        ...state,
        loading: true,
      };
    }

    case 'SAVE_POST_FULFILLED': {
      return {
        ...state,
        posts: [...state.posts, action.payload.data],
        errors: {},
        loading: false,
      };
    }

    case 'SAVE_POST_REJECTED': {
      const data = action.payload.response.data;
      // convert feathers error formatting to match client-side error formatting
      const {
        'name.first': first,
        'name.last': last,
        phone,
        email,
      } = data.errors;
      const errors = {
        global: data.message,
        name: { first, last },
        phone,
        email,
      };
      return {
        ...state,
        errors: errors,
        loading: false,
      };
    }

    case 'FETCH_POST_PENDING': {
      return {
        ...state,
        loading: true,
        post: { name: {} },
      };
    }

    case 'FETCH_POST_FULFILLED': {
      return {
        ...state,
        post: action.payload.data,
        errors: {},
        loading: false,
      };
    }

    case 'UPDATE_POST_PENDING': {
      return {
        ...state,
        loading: true,
      };
    }

    case 'UPDATE_POST_FULFILLED': {
      const post = action.payload.data;
      return {
        ...state,
        posts: state.posts.map(item => (item.id === post.id ? post : item)),
        errors: {},
        loading: false,
      };
    }
    //todo update code
    case 'UPDATE_POST_REJECTED': {
      const data = action.payload.response.data;
      const {
        'name.first': first,
        'name.last': last,
        phone,
        email,
      } = data.errors;
      const errors = {
        global: data.message,
        name: { first, last },
        phone,
        email,
      };
      return {
        ...state,
        errors: errors,
        loading: false,
      };
    }

    case 'DELETE_POST_FULFILLED': {
      const id = action.payload.data.id;
      return {
        ...state,
        posts: state.posts.filter(item => item.id !== id),
      };
    }

    default:
      return state;
  }
};
