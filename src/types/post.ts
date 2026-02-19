import { IntClosedRange } from 'type-fest';
import {
  ConferenceCall,
  GiftCount,
  Group,
  MessageTag,
  Shareable,
  SharedUrl,
  Survey,
  ThreadInfo,
  User,
  Video,
} from 'util/Models';

/**
 * 投稿のタイプ
 * - 'text': テキストのみの投稿
 * - 'media': メディアを含む投稿
 * - 'image': 画像が添付された投稿
 * - 'video': 動画が添付された投稿
 * - 'survey': アンケートが含まれる投稿
 * - 'call': 通話用の投稿
 * - 'shareable_url': サークルやスレッド共有用の投稿
 */
export type PostType = 'text' | 'media' | 'image' | 'video' | 'survey' | 'call' | 'shareable_url';

/**
 * 投稿
 */
export type Post = {
  id: number;
  text: string;
  postType: PostType;
  groupId: number | null;
  fontSize?: number;
  color: number;
  likesCount?: number;
  createdAt: number | null;
  updatedAt: number | null;
  editedAt?: number;
  liked?: boolean;
  likers?: User[];
  tag?: string;
  likersCount?: number;
  repostsCount?: number;
  reposted?: boolean;
  repostable?: boolean;
  reportedCount?: number;
  conversationId?: number;
  inReplyTo?: number;
  inReplyToPost?: Post;
  inReplyToPostCount?: number;
  user: User;
  mentions?: User[];
  group?: Group;
  conferenceCall?: ConferenceCall;
  attachment?: string;
  attachmentThumbnail?: string;
  attachment_2?: string;
  attachment_2Thumbnail?: string;
  attachment_3?: string;
  attachment_3Thumbnail?: string;
  attachment_4?: string;
  attachment_4Thumbnail?: string;
  attachment_5?: string;
  attachment_5Thumbnail?: string;
  attachment_6?: string;
  attachment_6Thumbnail?: string;
  attachment_7?: string;
  attachment_7Thumbnail?: string;
  attachment_8?: string;
  attachment_8Thumbnail?: string;
  attachment_9?: string;
  attachment_9Thumbnail?: string;
  shareable?: Shareable;
  sharedUrl?: SharedUrl;
  survey?: Survey;
  videos?: Video[];
  giftsCount?: GiftCount[];
  sharedThread?: ThreadInfo;
  threadId?: number;
  thread?: ThreadInfo;
  highlighted: boolean;
  messageTags: MessageTag[];
  isFailToSend?: boolean;
};

/**
 * 検索するポストの投稿者の範囲
 * - 'following': フォローしているユーザーに限定
 * - 'followers': フォロワーに限定
 * - 'mutual_followers': 相互フォローに限定
 */
export type PostOwnerScope = 'following' | 'followers' | 'mutual_followers';

/**
 * 投稿検索リクエストオプション
 */
export type SearchPostsRequestOptions = {
  keyword: string;
  postOwnerScope?: PostOwnerScope;
  onlyMedia?: boolean;
  fromPostId?: number;
  number?: IntClosedRange<1, 100>;
};

/**
 * 投稿検索レスポンス
 */
export type SearchPostsResponse = {
  nextPageValue: number | null;
  posts: Post[];
};
