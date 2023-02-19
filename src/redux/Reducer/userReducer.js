import {
  ADD_BILL,
  DELETE_BILL,
  SHOW_BILLS,
  FILTER
} from "../action/types";
const initialState = {
    bills: [
        {
        "id": 1,
        "description": "Dominoes",
        "category": "FoodNDining",
        "amount": "430",
        "date": "01-02-2020"
        },
        {
        "id": 2,
        "description": "Car wash",
        "category": "utility",
        "amount": "500",
        "date": "01-06-2020"
        },
        {
        "id": 3,
        "description": "Amazon",
        "category": "shopping",
        "amount": "2030",
        "date": "01-07-2020"
        },
        {
        "id": 4,
        "description": "House rent",
        "category": "Food & Dining",
        "amount": "35900",
        "date": "01-03-2020"
        },
        {
        "id": 5,
        "description": "Tuition",
        "category": "education",
        "amount": "2200",
        "date": "01-12-2020"
        },
        {
        "id": 6,
        "description": "Laundry",
        "category": "Personal Care",
        "amount": "320",
        "date": "01-14-2020"
        },
        {
        "id": 7,
        "description": "Vacation",
        "category": "Travel",
        "amount": "3430",
        "date": "01-18-2020"
        }
        ]
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_BILLS:
            return {
                ...state,
                // isLoggedIn: action.isLoggedIn,
            };
        case ADD_BILL: {
            const id  = state.bills.length
            return {
                ...state,
                bills: [{id,...action.payload},...state.bills],
            };
        }
        // case LOGIN_USER:
        //     return {
        //         ...state,
        //         isLoggedIn: action.isLoggedIn,
        //     };

        // case SET_CURRENT_USER:
        //     return {
        //         ...state,
        //         userDetails: {
        //             ...action.payload.user,
        //             userid: action.payload.user._id,
        //             type: "Student",
        //         },
        //         profile: {
        //             ...action.payload.user,
        //             userid: action.payload.user._id,
        //             type: "Student",
        //         },
        //         loading: false,
        //         isLoggedIn: true,
        //     };

        // case LOGOUT_USER:
        //     return {
        //         ...state,
        //         isLoggedIn: false,
        //     };
        // case STUDENT_JOY_RIDE:
        //     return {
        //         ...state,
        //         profile: {
        //             ...state.profile,
        //             [action.payload]: true,
        //         },
        //     };
        // case USER_MSG:
        //     return {
        //         ...state,
        //         passmsg: action.payload,
        //     };

        // case SHOW_PROFILE:
        //     return {
        //         ...state,
        //         profile: action.payload,
        //         loading: false,
        //     };
        // case UPDATE_AVATAR:
        //     return {
        //         ...state,
        //         profile: { ...state.profile, avatar: action.payload },
        //     };
        // case IS_CONNECT:
        //     return {
        //         ...state,
        //         isConnect: action.payload,
        //     };
        // case COACH_CONNECT:
        //     return {
        //         ...state,
        //         // coachingname:action.payload.coachingname,
        //         connectingmsg: action.payload,
        //     };
        // case SEARCH_COACH:
        //     return {
        //         // adminDetails: action.payload,
        //         ...state,
        //         coachingname: action.payload.coachingname,
        //         // connectingmsg: action.payload.msg,
        //     };
        case DELETE_BILL:
            console.log(action.payload)
            return {
                ...state,
            
                    
                    bills: state.bills.filter((bill) => {
                        return action.payload !== bill.id;
                    }),
            
            };
        // case GET_MARK:
        //     return {
        //         ...state,
        //         profile: {
        //             ...state.profile,
        //             bookMarked: action.payload,
        //         },
        //         mark_loading: false,
        //     };
        // case ADD_MARK:
        //     return {
        //         ...state,

        //         profile: {
        //             ...state.profile,
        //             bookMarked: action.payload,
        //         },
        //     };
        // case FILTER_BOOKMARK:
        //     return {
        //         ...state,
        //         profile: {
        //             ...state.profile,
        //             bookMarked: action.payload,
        //         },
        //         loading: false,
        //     };
        // case SEEN_NOTI:
        //     return {
        //         ...state,
        //         profile: {
        //             ...state.profile,
        //             notification: state.profile.notification.map(
        //                 (notification) => {
        //                     if (action.payload === notification._id) {
        //                         return {
        //                             ...notification,
        //                             seen: 1,
        //                         };
        //                     } else return notification;
        //                 }
        //             ),
        //         },
        //     };
        // case DELETE_NOTI:
        //     return {
        //         ...state,
        //         profile: {
        //             ...state.profile,
        //             notification: state.profile.notification.filter(
        //                 (notification) => {
        //                     return action.payload !== notification._id;
        //                 }
        //             ),
        //         },
        //     };
        // case UPDATE_PROFILE:
        //     return {
        //         ...state,
        //         profile: action.payload,
        //         loading: false,
        //     };
        // case BOOK_MARK:
        //     return {
        //         ...state,
        //         examanalysis: {
        //             ...state.examanalysis,
        //             usersheet: [
        //                 {
        //                     ...state.examanalysis.usersheet[0],
        //                     sec: state.examanalysis.usersheet[0].sec.map(
        //                         (e) => {
        //                             if (e._id === action.payload.secId)
        //                                 return {
        //                                     ...e,
        //                                     question: e.question.map((el) => {
        //                                         if (
        //                                             el._id ===
        //                                             action.payload.queId
        //                                         )
        //                                             return {
        //                                                 ...el,
        //                                                 bookmark:
        //                                                     action.payload
        //                                                         .bookMark,
        //                                             };
        //                                         else return el;
        //                                     }),
        //                                 };
        //                             else return e;
        //                         }
        //                     ),
        //                 },
        //             ],
        //         },
        //     };
        // case GET_EXAM:
        //     return {
        //         ...state,
        //         exam: action.payload,
        //         examloading: false,
        //     };
        // // case ATTEMPT_EXAM:
        // //   return {
        // //     ...state,
        // //     attemptexam: action.payload,
        // //     attemptloading: false,
        // //   };

        // case DASHBOARD_CARD:
        //     return {
        //         ...state,
        //         dashboard: action.payload,
        //         dashboardloading: false,
        //     };
        // case ATTEMPTED_EXAM:
        //     return {
        //         ...state,
        //         attemptedexam: action.payload,
        //         attemptedexamloading: false,
        //     };
        // case EXAM_SUBMIT:
        //     return {
        //         ...state,

        //         submitmsg: action.payload,
        //         attemptedexamloading: true,
        //     };
        // case EXAM_ANALYSIS:
        //     return {
        //         ...state,
        //         examanalysis: action.payload,
        //         analysisloading: false,
        //     };
        // case POST_PROFILE:
        //     return {
        //         ...state,
        //         postprofile: action.payload,
        //         postprofileloading: false,
        //     };
        // case ADD_POST:
        //     return {
        //         ...state,
        //         allpost: [action.payload, ...state.allpost],
        //     };
        // case ADD_COMMENT:
        //     return {
        //         ...state,
        //         allpost: state.allpost.map((post) => {
        //             if (post._id === action.payload.postid) {
        //                 return {
        //                     ...post,
        //                     comment: [...action.payload.comment],
        //                 };
        //             } else return post;
        //         }),
        //     };
        // case ADD_UPVOTE:
        //     return {
        //         ...state,
        //         allpost: state.allpost.map((post) => {
        //             if (post._id === action.payload.postid) {
        //                 return {
        //                     ...post,
        //                     upvote: action.payload.upvote,
        //                 };
        //             } else return post;
        //         }),
        //     };
        // case POST_POLL:
        //     return {
        //         ...state,
        //         allpost: state.allpost.map((post) => {
        //             if (post._id === action.payload.postid) {
        //                 return {
        //                     ...post,
        //                     poll: action.payload.poll,
        //                 };
        //             } else return post;
        //         }),
        //     };
        // case DELETE_COMMENT:
        //     return {
        //         ...state,
        //         allpost: state.allpost.map((post) => {
        //             if (post._id === action.payload.postid) {
        //                 return {
        //                     ...post,
        //                     comment: post.comment.filter((comment) => {
        //                         return comment._id !== action.payload.commentid;
        //                     }),
        //                 };
        //             } else return post;
        //         }),
        //     };

        // case DELETE_POST:
        //     return {
        //         ...state,
        //         allpost: state.allpost.filter((post) => {
        //             return post._id !== action.payload.data.postid;
        //         }),
        //     };
        // case MORE_POST:
        //     let Ismore;
        //     Ismore = action.payload.allpost.length === 0 ? false : true;
        //     return {
        //         ...state,
        //         isMore: Ismore,
        //         allpost: [...state.allpost, ...action.payload.allpost],
        //         morepostsloading: false,
        //     };
        // case ALL_POST:
        //     return {
        //         ...state,

        //         allpost: action.payload.allpost,
        //         contributor: action.payload.contributor,
        //         contributionProfile: action.payload.contributionProfile,
        //         postsloading: false,
        //     };
        // case FILTER_POST:
        //     return {
        //         ...state,
        //         allpost: action.payload,
        //     };
        // case EXTRA_PAGE:
        //     let IsMore;
        //     IsMore = action.payload.length === 0 ? false : true;
        //     return {
        //         ...state,
        //         isMore: IsMore,
        //         allpost: [...state.allpost, ...action.payload],
        //     };
        // case FILTER_POSTSUB:
        //     return {
        //         ...state,
        //         allpost: action.payload,
        //     };
        // case AUTH_ERROR:
        // case LOGIN_USER_ERROR:
        //     // localStorage.removeItem("token");
        //     return {
        //         ...state,
        //         msg: action.payload,
        //     };
        default:
            return state;
    }
};

export default userReducer;
