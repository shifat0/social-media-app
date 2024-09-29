import Posts from '@/components/home/main/Posts';
import Stories from '@/components/home/main/Stories';
import WritePost from '@/components/home/main/WritePost';
import React from 'react';

type Props = {};

export default function Main({}: Props) {
    return (
        <section className="space-y-4">
            <Stories />
            <WritePost />
            <Posts />
        </section>
    );
}
