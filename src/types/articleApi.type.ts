/**
 * @CRUD post
 * @ACTION postArticle
 */
export interface INewArticleRequest {
  article: {
    title: string;
    description: string;
    body: string;
    tagList: string[];
  };
}

/**
 * @CRUD get
 * @ACTION getArticle
 */
export interface ISingleArticleResponse {
  article: IArticle;
}

export interface IArticle {
  slug: string;
  title: string;
  description: string;
  body: string;
  tagList: string[];
  createdAt: string;
  updatedAt: string;
  favorited: boolean;
  favoritesCount: number;
  author: {
    username: string;
    bio: string;
    image: string;
    following: boolean;
  };
}

/**
 * @CRUD post
 * @ACTION postComment
 */
export interface INewCommentRequest {
  comment: {
    body: string;
  };
}

export interface IComment {
  id: number;
  createdAt: string;
  updateAt: string;
  body: string;
  author: {
    username: string;
    bio: string;
    image: string;
    following: boolean;
  };
}

/**
 * @CRUD get
 * @ACTION getComments
 */
export interface IMultipleCommentsResponse {
  comments: IComment[];
}

/**
 * @CRUD get
 * @Action getFeed
 */
export interface IMultipleArticlesResponse {
  articles: IArticle[];
  articlesCount: number;
}
