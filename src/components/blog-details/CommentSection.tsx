import Link from 'next/link';
import React from 'react';
import authorImg1 from '../../../public/assets/img/news/author-02.png';
import authorImg2 from '../../../public/assets/img/news/author-03.png';
import { imageLoader } from '@/hooks/ImageLoader';
import Image from 'next/image';

const CommentSection = () => {
    return (
        <>
            <div className="ms-comment-list-wrap">
                <div className="ms-comment-list ms-border2">
                    <div className="ms-comment-img">
                        <Image src={authorImg1} loader={imageLoader} placeholder="blur" loading='lazy' style={{ width: '100%', height: "auto" }}
                            alt="author" />
                    </div>
                    <div className="ms-comment-content">
                        <div className="ms-comment-title">
                            <span className="ms-reply"><Link href="#">Reply</Link></span>
                            <h3>Tom williams</h3>
                            <span>Mar 15, 2023</span>
                            <p>Alienum phaedrum torquatos nec eu, vis detraxit periculis
                                ex, nihil expetendis in mei. Mei an pericula euripidis,
                                hinc
                                partem ei est. Eos ei nisl graecis.</p>
                        </div>
                    </div>
                </div>
                <div className="ms-comment-list ms-border2">
                    <div className="ms-comment-img">
                        <Image src={authorImg2} loader={imageLoader} placeholder="blur" loading='lazy' style={{ width: '100%', height: "auto" }}
                            alt="author" />
                    </div>
                    <div className="ms-comment-content">
                        <div className="ms-comment-title">
                            <span className="ms-reply"><Link href="#">Reply</Link></span>
                            <h3>Barbara J. Silvey</h3>
                            <span>Mar 16, 2023</span>
                            <p>Craig, 41, told The Sun {`newspaper's`} Bizarre column: “MOBO
                                has been there since the beginning of my career.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CommentSection;