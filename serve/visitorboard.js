const currentComments = [];
// let currentTargetCommentIdx = [];
let rollingCommentsCallback = undefined;
let rollingCommentsCallback2 = undefined;

// const rollingComments = () => {
//     const comments = document.querySelectorAll('.visitors_content');
//     currentTargetCommentIdx.forEach(idx => {
//         const comment = comments[idx];
//         comment.classList.remove('visitors_content_highlight');
//     });
//     for(let i = 0; i < 1; i++){
//         const nextCommentIdx = Math.floor(Math.random() * comments.length);
//         currentTargetCommentIdx.push(nextCommentIdx);
//         const nextComment = comments[nextCommentIdx];
//         nextComment.classList.add('visitors_content_highlight');
//     }
// }

const startRolling = () => {
    // rollingCommentsCallback = setInterval(rollingComments, 5000);
    rollingCommentsCallback2 = requestAnimationFrame(movingSlowlyUp);
    
}
const stopRolling = () => {
    // rollingCommentsCallback && clearInterval(rollingCommentsCallback);
    rollingCommentsCallback2 && cancelAnimationFrame(rollingCommentsCallback2);
}

const showDimDiv = () => {
    stopRolling();
    const dimDiv = document.querySelector('.dim');
    dimDiv.style.visibility = 'visible';
    clearDimDiv();

    getCommentsFromServer()
    .then(comments => {
        currentComments.push(...comments);
        createCommentsOnDim(currentComments);
        //rollingComments();
        startRolling();
    });
}

const clearDimDiv = () => {
    const dimDiv = document.querySelector('.visitor_comment');
    dimDiv.innerHTML = '';
    currentComments.length = 0;
}

const hideDimDiv = () => {
    stopRolling();
    const dimDiv = document.querySelector('.dim');
    dimDiv.style.visibility = 'hidden';
    clearDimDiv();
}

const createCommentsOnDim = (comments) => {
    const dimDiv = document.querySelector('.visitor_comment');
    comments.forEach(comment => {
        dimDiv.innerHTML += `<div class="visitors_content" key="${comment.key}">
            <span>${comment.content}</span><br/>
            <span style="float:center;margin:0.5rem;padding-top:1rem;font-size:0.75rem;font-weight:normal !important;">${comment.writer}</span>
        </div>`;
    });
}

/**
 * 
 * @param {number} pagination 
 * @returns 
 */
const getCommentsFromServer = async (pagination = 0) => {
    const MOCK = false;
    if(MOCK){
        const mock = [
            { key: "1", content: '너무 축하드립니다', writer: '익명' },
            { key: "2", content: '이쁜사랑하세요', writer: '익명' },
            { key: "3", content: '사진 너무 이뻐요', writer: '익명' },
            { key: "4", content: '동해물과 백두산이 마르고 닳도록', writer: '익명' },
            { key: "5", content: '결혼 축하드려요', writer: '익명' },
            { key: "6", content: '행복한 결혼 생활 되세요', writer: '익명' },
            { key: "7", content: '영원한 사랑을 기원합니다', writer: '익명' },
            { key: "8", content: '사랑스러운 커플이네요', writer: '익명' },
            { key: "9", content: '행복한 가정을 이루시길 바랍니다', writer: '익명' },
            { key: "10", content: '축하드려요! 멋진 결혼식이었어요', writer: '익명' },
            { key: "11", content: '사랑이 가득한 날이네요', writer: '익명' },
            { key: "12", content: '행복한 미래를 함께하세요', writer: '익명' },
            { key: "13", content: '사랑과 축복을 보냅니다', writer: '익명' },
            { key: "14", content: '행복한 결혼식이었습니다', writer: '익명' },
            { key: "15", content: '사랑으로 가득한 하루 되세요', writer: '익명' },
            { key: "16", content: '축하합니다! 행복한 결혼식이었어요', writer: '익명' },
            { key: "17", content: '사랑이 넘치는 날이네요', writer: '익명' },
            { key: "18", content: '행복한 결혼 생활을 기원합니다', writer: '익명' },
            { key: "19", content: '사랑으로 가득찬 미래를 함께하세요', writer: '익명' },
            { key: "20", content: '축하드립니다! 행복한 결혼식이었습니다', writer: '익명' },
            { key: "21", content: '사랑이 넘치는 날이네요', writer: '익명' },
            { key: "22", content: '행복한 결혼 생활을 기원합니다', writer: '익명' },
            { key: "23", content: '사랑으로 가득찬 미래를 함께하세요', writer: '익명' },
            { key: "24", content: '축하드립니다! 행복한 결혼식이었습니다', writer: '익명' },
            { key: "25", content: '사랑이 넘치는 날이네요', writer: '익명' },
            { key: "26", content: '행복한 결혼 생활을 기원합니다', writer: '익명' },
            { key: "27", content: '사랑으로 가득찬 미래를 함께하세요', writer: '익명' },
            { key: "28", content: '축하드립니다! 행복한 결혼식이었습니다', writer: '익명' },
            { key: "29", content: '사랑이 넘치는 날이네요', writer: '익명' },
            { key: "30", content: '행복한 결혼 생활을 기원합니다', writer: '익명' },
            { key: "31", content: '축하드립니다! 행복한 결혼식이었습니다', writer: '익명' },
            { key: "32", content: '사랑이 넘치는 날이네요', writer: '익명' },
            { key: "33", content: '행복한 결혼 생활을 기원합니다', writer: '익명' },
            { key: "34", content: '사랑으로 가득찬 미래를 함께하세요', writer: '익명' },
            { key: "35", content: '축하드립니다! 행복한 결혼식이었습니다', writer: '익명' },
            { key: "36", content: '사랑이 넘치는 날이네요', writer: '익명' },
            { key: "37", content: '행복한 결혼 생활을 기원합니다', writer: '익명' },
            { key: "38", content: '사랑으로 가득찬 미래를 함께하세요', writer: '익명' },
            { key: "39", content: '축하드립니다! 행복한 결혼식이었습니다', writer: '익명' },
            { key: "40", content: '사랑이 넘치는 날이네요', writer: '익명' },
            { key: "41", content: '행복한 결혼 생활을 기원합니다', writer: '익명' },
            { key: "42", content: '사랑으로 가득찬 미래를 함께하세요', writer: '익명' },
            { key: "43", content: '축하드립니다! 행복한 결혼식이었습니다', writer: '익명' },
            { key: "44", content: '사랑이 넘치는 날이네요', writer: '익명' },
            { key: "45", content: '행복한 결혼 생활을 기원합니다', writer: '익명' },
            { key: "46", content: '사랑으로 가득찬 미래를 함께하세요', writer: '익명' },
            { key: "47", content: '축하드립니다! 행복한 결혼식이었습니다', writer: '익명' },
            { key: "48", content: '사랑이 넘치는 날이네요', writer: '익명' },
            { key: "49", content: '행복한 결혼 생활을 기원합니다', writer: '익명' },
            { key: "50", content: '사랑으로 가득찬 미래를 함께하세요', writer: '익명' }
        ];
        const ret = mock.slice(pagination * 10, pagination * 10 + 10);
        return new Promise((resolve, reject) => {
            resolve(ret);
        });
    }

    return new Promise((resolve, reject) => {
        getComments(pagination)
        .then(comments =>{
            resolve(comments);
        })
        .catch(error => {
            reject(error);
        });
    });
}

/**
 * 
 * @param {string} content 
 * @param {string} writer 
 * @returns 
 */
const registerComment = async (content, writer) => {
    return new Promise((resolve, reject) => {
        insertComment(content, writer)
        .then(res => {
            resolve(true);
            toast('등록되었습니다');
        })
        .catch(error => { 
            reject(error);
            toast(error.message);
        });
    });
};

const submitVisitorComment = () => {
    const inputElement = document.querySelector('#visitor_input');
    const writerInputElement = document.querySelector('#visitor_writer');
    const content = inputElement.value;
    const writer = writerInputElement.value;
    registerComment({content, writer})
    .then(res => {
        currentComments.push({content, writer});
        const dimDiv = document.querySelector('.visitor_comment');
        dimDiv.innerHTML = '';
        createCommentsOnDim(currentComments);
        
        inputElement.value = '';
        writerInputElement.value = '';
    });
}

let currentScrollTopValue = 0;
const movingSlowlyUp = () =>{
    const dimDiv = document.querySelector('#visitor_comment_container');
    dimDiv.scrollTop = dimDiv.scrollTop + (currentScrollTopValue++)/3;
    currentScrollTopValue %= 4;
    highlightCommentByScrollPosition(dimDiv.scrollTop);
    if(dimDiv.scrollHeight - dimDiv.scrollTop <= dimDiv.clientHeight){
        dimDiv.scrollTop = 0;
    }
    rollingCommentsCallback2 = requestAnimationFrame(movingSlowlyUp);
}

const highlightCommentByScrollPosition = (scrollTop) => {
    const comments = document.querySelectorAll('.visitors_content');
    const clientHeight = document.documentElement.clientHeight;
    comments.forEach((comment, idx) => {
        if(comment.offsetTop >= scrollTop + clientHeight / 5 && comment.offsetTop <= scrollTop + clientHeight / 3 * 2){
            comment.classList.add('visitors_content_highlight');
        }else{
            comment.classList.remove('visitors_content_highlight');
        }
    });
}