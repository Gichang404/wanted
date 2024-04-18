import { getNumbers, add, addArrayNumbers } from './calculator';

it('add test',() => {
     // add(1, 2); 내가 기대하는 결과 값이 나오면 성공이야.
    expect(add(1, 2)).toBe(3);
});


// 아래 두 테스트 케이스를 묶어서 확인하는 경우

describe("get numbers and sum", () => {
    const getData = async () => {
        const response = await getNumbers();
        const responseData = await response.json();

        return responseData;
    }
    const name = "dalaran";

    test("get numbers", async () => {
        const data = await getData();
    
        expect(data).toStrictEqual([1,2,3,4,5]);
    });
    
    test("add array numbers", async () => {
        const data = await getData();

        expect(addArrayNumbers(data)).toBe(15);
    });
});