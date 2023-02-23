import { CheckList } from '../../Components/Modal/Types/types';

const sendEmailList = async (checkList: CheckList): Promise<CheckList> => {
  const res = await fetch('http://localhost:4000/api/mail', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: checkList.name,
      mail: checkList.mail,
    }),
  });
  return res.json();
};

export default sendEmailList;
