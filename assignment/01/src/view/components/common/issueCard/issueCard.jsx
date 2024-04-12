import * as S from './issueCard'
import { useNavigate } from 'react-router-dom'

const IssueCard = ({
    number,
    title,
    comments,
    user,
    created_at,
}) => {
    const navigate = useNavigate();

    const onClickIssue = () => {
        navigate(`/detail/${number}`);
    }

    return (
        <S.ICardWrapper onClick={onClickIssue}>
            <S.ICardIssue>
                <S.ICardInfoTitle>{`#${number} issue ${title}`}</S.ICardInfoTitle>
                <S.ICardInfo>작성자: {user?.login}, 작성일: {created_at}</S.ICardInfo>
            </S.ICardIssue>
            <S.ICardCommnets>
                <S.ICardCommnetsNum>코멘트: {comments}</S.ICardCommnetsNum>
            </S.ICardCommnets>
        </S.ICardWrapper>
    );
}

export default IssueCard;