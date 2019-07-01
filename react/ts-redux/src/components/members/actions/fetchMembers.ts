import { memberAPI } from '../../../api/member';
import { MemberEntity } from '../../../model';
import { members } from '../../../api/member/mockData';

export const fetchMembersAction = () => (dispatch) => {
  // ajax api
  memberAPI.fetchMembers().then(members => {
    // 下一个动作
    dispatch(fetchMembersCompleted(members))
  })
}

// action 返回一个带有type对象, reducer重新计算, reducer = state + mutations
const fetchMembersCompleted = (members: MemberEntity[]) => ({
  type: 'FETCH_MEMBER_COMPLETED',
  payload: members,
})