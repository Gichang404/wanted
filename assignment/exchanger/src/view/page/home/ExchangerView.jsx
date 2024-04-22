import * as S from "../../../asset/css/Excahnger";
import LoaderView from "../../common/Loader";

const ExchangerView = (props) => {
    return (
        <S.Wrapper>
            <S.Banner></S.Banner>
            <S.CurrencyArea>
                <S.Image></S.Image>
                <S.InputArea>
                    <input
                        placeholder="숫자만 입력 가능합니다."
                        ref={props.inputRef}
                        onChange={(e) => {
                            props.inputValueHandler(e.target.value);
                        }}
                    />
                    <select
                        onChange={(event) => {
                            props.onChangeBase(event.target.value);
                        }}
                    >
                        {props.symbols.map((el, index) => (
                            <option key={index}>{el}</option>
                        ))}
                    </select>
                </S.InputArea>
            </S.CurrencyArea>
            <S.ContentArea>
                <S.Content>
                    <S.NavArea>
                        {props.symbols.map(
                            (symbol, index) =>
                                props.base !== symbol && (
                                    <S.Nav
                                        selected={props.selected}
                                        symbol={symbol}
                                        key={index}
                                        onClick={(event) => {
                                            props.selectedHandler(
                                                event.target.textContent
                                            );
                                        }}
                                    >
                                        {symbol}
                                    </S.Nav>
                                )
                        )}
                    </S.NavArea>
                    {props.isLoading ? (
                        <S.CurrencyInfo>
                            <LoaderView />
                        </S.CurrencyInfo>
                    ) : (
                        <S.CurrencyInfo>
                            {props.latest.date ? (
                                <>
                                    <S.Currency>
                                        {props.selected}:{" "}
                                        {props.convertCurrency}
                                    </S.Currency>
                                    <S.Date>기준일: {props.latest.date}</S.Date>
                                </>
                            ) : (
                                <p>금액을 입력해주세요.</p>
                            )}
                        </S.CurrencyInfo>
                    )}
                </S.Content>
            </S.ContentArea>
        </S.Wrapper>
    );
};

export default ExchangerView;
