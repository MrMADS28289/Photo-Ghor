import React from 'react';
import { Container } from 'react-bootstrap';

const Blog = () => {
    return (
        <Container className='mt-5 pt-5'>
            <div className='m-5 p-5 shadow-lg'>
                <h3> Difference between authorization
                    and authentication</h3>
                <p>সহজভাবে বলতে গেলে, অথেন্টিকেশন হল কাউকে যাচাই করার প্রক্রিয়া। আর যেখানে অথোরাইজ হল ব্যবহারকারীর কোন নির্দিষ্ট অ্যাপ্লিকেশন, ফাইল এবং ডেটাতে অ্যাক্সেস রয়েছে তা যাচাই করার প্রক্রিয়া ।</p>
            </div>
            <div className='m-5 p-5 shadow-lg'>
                <h3>Why are you using firebase? What other options do you have to implement authentication?</h3>
                <p> Firebase ডাটাবেসের সমস্ত ডেটা রিয়েল-টাইম পরিচালনা করে ৷ সুতরাং, ডাটাবেস থেকে ডেটা আদান-প্রদান সহজ এবং দ্রুত। তাই, আপনি যদি লাইভ স্ট্রিমিং, চ্যাট মেসেজিং ইত্যাদির মতো মোবাইল অ্যাপ তৈরি করতে চান, তাহলে আপনি Firebase ব্যবহার করতে পারেন। আর সাধারণত, একটি সার্ভার দ্বারা প্রমাণীকরণ একটি ব্যবহারকারীর নাম এবং পাসওয়ার্ড ব্যবহার entails. প্রমাণীকরণের অন্যান্য উপায় হতে পারে কার্ড, রেটিনা স্ক্যান, ভয়েস রিকগনিশন এবং আঙ্গুলের ছাপের মাধ্যমে ।</p>
            </div>
            <div className='m-5 p-5 shadow-lg'>
                <h3>What other services does firebase provide other than authentication</h3>
                <p>ফায়ারবেস প্রদান করে এমন অনেকগুলি পরিষেবা রয়েছে যার মধ্যে সবচেয়ে দরকারী হল:
                    ক্লাউড ফায়ারস্টোর, ক্লাউড ফাংশন, অথেন্টিকেশন, হোস্টিং, ক্লাউড স্টোরেজ, গুগল এনালাইটিক্স, প্রিডিক্টিশন, ক্লাউড মেসেজিং, ডাইনামিক লিংক, রিমোট কনফিগারেশন</p>
            </div>
        </Container>
    );
};

export default Blog;