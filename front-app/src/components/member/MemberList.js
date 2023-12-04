import React from 'react';
import '../../../src/styles/MemberList.css'; // 스타일 파일을 불러옴

const MemberList = ({ members }) => {
  return (
    <div>
      <h1>회원 목록</h1>
      <table className="member-table">
        <thead>
        <tr>
          <th>회원번호</th>
          <th>이름</th>
          <th>이메일</th>
        </tr>
        </thead>
        <tbody>
        {members.map((member) => (
          <tr key={member.seq}>
            <td>{member.seq}</td>
            <td>{member.name}</td>
            <td>{member.email}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
};

export default MemberList;