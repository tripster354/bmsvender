// // import { TrendingClubData } from '../../screens/Home/MockData';
// import {BANEERAPIPOST, CREATEPOST_MODEL, LOGIN, PROFILEGETDETAIL, SKILLINTEREST, SUGGESTEDCONNECTIOS, SUGGESTEDOFFERS, TRENDINGCLUB, TRENDINGSKILL, TRENDINGTEACHERS} from '../actions/Types';

// const intialState = {
//   openCreateModal : false,
//   bannerData : [],
//   TrendingData:[],
//   SkillInteresData:[],
//   SuggestedOfferData: [],
//   TrendingTeachersData: [],
//   TrendingClubData: [],
//   SuggestedConnectionsData: [],
//   ProfileDetailData: []
// };



// export default (state = intialState, action) => {
//   // console.log('actionData',action)
//   switch (action.type) {
//     case CREATEPOST_MODEL:{
//       return{
//         ...state,
//         openCreateModal: action.payload
//       }
//     }
//     case BANEERAPIPOST:{
//       return{
//         ...state,
//         bannerData: action.payload
//       }
//     }
//     case TRENDINGSKILL:{
//       return{
//         ...state,
//         TrendingData: action.payload
//       }
//     }
//     case SKILLINTEREST:{
//       return{
//         ...state,
//         SkillInteresData: action.payload
//       }
//     }
//     case SUGGESTEDOFFERS:{
//       return{
//         ...state,
//         SuggestedOfferData: action.payload
//       }
//     }
//     case TRENDINGTEACHERS:{
//       return{
//         ...state,
//         TrendingTeachersData: action.payload
//       }
//     }
//     case TRENDINGCLUB:{
//       return{
//         ...state,
//         TrendingClubData: action.payload
//       }
//     }
//     case SUGGESTEDCONNECTIOS:{
//       return{
//         ...state,
//         SuggestedConnectionsData: action.payload
//       }
//     }
//     case PROFILEGETDETAIL:{
//       return{
//         ...state,
//         ProfileDetailData: action.payload
//       }
//     }
//       default: {
//       return state;
//     }
//   }
// };
