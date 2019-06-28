import * as React from 'react';
import { memberAPI } from '../../api/member';
import { MemberEntity } from '../../model';
import { members } from '../../api/member/mockData';

interface Props {

}
interface State {
  members: MemberEntity[]
}

export class MembersPage extends React.Component<Props, State> {
  constructor (props) {
    super(props);
    this.state = {
      members: []
    }
  }
  public componentDidMount () {
    memberAPI.fetchMembers().then((members) => {
      this.setState({
        members
      })
    })
  }
  public render() {
    return (
      <div>
        <table className="table">
          <thead></thead>
          <tbody>
            {
              this.state.members.map(MemberRow)
            }
          </tbody>
        </table>
      </div>
    );
  }
}

const MemberRow = (memeber: MemberEntity) => {
  return (
    <tr key={memeber.id}>
      <td>
        <img src={memeber.avatar_url} alt="" className="avatar" />
      </td>
      <td><span>{memeber.id}</span></td>
      <td><span>{memeber.login}</span></td>
    </tr>
  )
}