export const filterArray = (target, arr) => {
    const newArr = arr.filter((el) => el !== target);

    return newArr;
}

export const isInArray = (arr, target) => {
    const index = arr.indexOf(target);
    if (index !== -1) {
        return true
    }

    return false;
}

// date 포멧 변환
export const dateFormatter = (dateStr) => {
    if (!dateStr) {
        return;
    }
    
    const date = new Date(dateStr);

    const formatter = new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });

    const result = formatter.formatToParts(date);
    const year = result.find(part => part.type === 'year').value;
    const month = result.find(part => part.type === 'month').value;
    const day = result.find(part => part.type === 'day').value;

    return `${year}-${month}-${day}`;
}
