import React, { useCallback, useState } from 'react';
import { BsCheck2Circle, BsCircle, BsSquare, BsCheck2Square } from "react-icons/bs";
import BoardForm from "../../components/board/BoardForm";

const BoardFormContainer = () => {
  const [form, setForm] = useState<{ checkbox: 'true' | 'false' , radio: 'ALL' | 'USER' | 'ADMIN' }>({
    radio: 'ALL',
    checkbox: true,
  });


  const onRadioClick = useCallback(
    (v) => setForm((f) => ({ ...f, radio: v })),
    [],
  );

  const onCheckbox = useCallback(
    () => setForm((f) => ({ ...f, checkbox: !f.checkbox })),
    [],
  );

  return (
    <>
      <tbody>
      <tr>
        {/* 라디오 버튼 */}
        <td onClick={() => onRadioClick('ALL')}>
          {form.radio === 'ALL' ? <BsCheck2Circle /> : <BsCircle />}
        </td>
        <td onClick={() => onRadioClick('USER')}>
          {form.radio === 'USER' ? <BsCheck2Circle /> : <BsCircle />}
        </td>
        <td onClick={() => onRadioClick('ADMIN')} >
          {form.radio === 'ADMIN' ? <BsCheck2Circle /> : <BsCircle />}
        </td>
        {/* 체크박스 */}
        <td onClick={onCheckbox}>
          {form.checkbox ? <BsCheck2Square /> : <BsSquare />}
        </td>
      </tr>
      </tbody>

      <BoardForm formData={form} onRadioClick={onRadioClick} onCheckbox={onCheckbox} />
    </>
  );
};

export default BoardFormContainer;
