import { createClient } from '@supabase/supabase-js';

const some1 = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsI";
const some0 = "nJlZiI6Inh2bWVhb3luYnJkeG9jY3pndmdnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ3MzM3ODUsImV4cCI6MjAyMDMwOTc4N";
const some3 = "X0.Oy6gmUiQkD1Hn17IBq2PoZqPSFcTnzFlewdDQmMSCIE";
const supabase = createClient('https://xvmeaoynbrdxocczgvgg.supabase.co', `${some1}${some0}${some3}`);

const getComments = async (pagination) => {
    const { data, error } = await supabase
        .from('visitorboard')
        .select('*')
        .order('created_at', { ascending: false })
        // .range(pagination * 10, pagination * 10 + 10)
    if (error) console.log('error', error)
    return data
}

/**
 * 
 * @param {Comment} comment 
 * @returns 
 */
const insertComment = async (comment) => {
    if(!comment.writer){
        throw new Error('닉네임을 입력해주세요');
    }
    if(!comment.content){
        throw new Error('내용을 입력해주세요');
    }

    const { error } = await supabase
        .from('visitorboard')
        .insert(comment)
    if (error){
        throw new Error('등록에 실패했습니다');
    }
    return true;
}

window.getComments = getComments;
window.insertComment = insertComment;