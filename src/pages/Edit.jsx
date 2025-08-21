import React, { useContext, useEffect, useState } from 'react'
import { useParams, useNavigate, replace } from 'react-router-dom'
import Editor from '../components/Editor'
import Header from '../components/Header'
import Button from '../components/Button'
import { DiaryDispatchContext, DiaryStateContext } from '../App'

const Edit = () => {
  const { id } = useParams()
  const nav = useNavigate()
  const { onDelete, onUpdate } = useContext((DiaryDispatchContext))
  const data = useContext(DiaryStateContext)
  const [currentDiaryItem, setCurDiaryItem] = useState(null)

  useEffect(() => {
    const currentDiaryItem = data.find(
      (item) => String(item.id) === String(id)
    )
    if (!currentDiaryItem) {
      window.alert("존재하지 않는 일기입니다.")
      nav('/', { replace: true })
    }
    setCurDiaryItem(currentDiaryItem)
  }, [id, data, nav])
  const onSubmit=(input)=>{
    if(window.confirm('일기를 수정 하시겠습니까')){
      onUpdate(
        id,
        input.createdDate.getTime(),
        input.emotionId,
        input.content
      )
      nav('/',{replace:true})
    }
  }
  return (
    <div>
      <Header
        leftChild={<Button text={"<뒤로가기"} onClick={() => nav(-1)} />}
        rightChild={<Button text={"삭제하기"} type={'NEGATIVE'} />}
        title={"일기 수정하기"}
      />
      <Editor initData={curDiaryItem} />
    </div>
  )
}

export default Edit