import * as S from './issueCard'
import { useNavigate } from 'react-router-dom'
import {ReactComponent as CommentSVG} from '../../../../assects/issue_comment.svg'

const IssueCard = ({
    number,
    title,
    comments,
    user,
    created_at,
    className,
}) => {
    const navigate = useNavigate();

    const onClickIssue = () => {
        navigate(`/detail/${number}`);
    }

    return (
        <S.ICardWrapper onClick={onClickIssue} className={className}>
            <S.ICardIssue>
                <S.ICardInfoTitle>{`#${number} issue ${title}`}</S.ICardInfoTitle>
                <S.ICardInfo>작성자: {user?.login}, 작성일: {created_at}</S.ICardInfo>
            </S.ICardIssue>
            <S.ICardCommnets>
                <S.ICardCommnetsNum>
                    <CommentSVG width="20px" height="20px"/>
                    <p>{comments}</p>
                </S.ICardCommnetsNum>
            </S.ICardCommnets>
        </S.ICardWrapper>
    );
}

export default IssueCard;