import React from 'react';
import { Link } from 'react-router-dom';

import blog1 from '../../../../images/blog/blog-1.jpg';
import blogInsidePost from '../../../../images/blog/blog-inside-post.jpg';
import blogAuthor from '../../../../images/blog/blog-author.jpg';

import comments1 from '../../../../images/blog/comments-1.jpg';
import comments2 from '../../../../images/blog/comments-2.jpg';
import comments3 from '../../../../images/blog/comments-3.jpg';
import comments4 from '../../../../images/blog/comments-4.jpg';
import comments5 from '../../../../images/blog/comments-5.jpg';
import comments6 from '../../../../images/blog/comments-6.jpg';

const BlogDetailsSection = () => {
    return (
        <div className="col-lg-8">


            <section id="blog-details" className="blog-details section">
                <div className="container">

                    <article className="article">

                        <div className="post-img">
                            <img src={blog1} alt="" className="img-fluid" />
                        </div>

                        <h2 className="title">Dolorum optio tempore voluptas dignissimos cumque fuga qui quibusdam quia</h2>

                        <div className="meta-top">
                            <ul>
                                <li className="d-flex align-items-center"><i className="bi bi-person"></i> <Link to="blog-details.html">John Doe</Link></li>
                                <li className="d-flex align-items-center"><i className="bi bi-clock"></i> <Link to="blog-details.html"><time dateTime="2020-01-01">Jan 1, 2022</time></Link></li>
                                <li className="d-flex align-items-center"><i className="bi bi-chat-dots"></i> <Link to="blog-details.html">12 Comments</Link></li>
                            </ul>
                        </div>

                        <div className="content">
                            <p>
                                Similique neque nam consequuntur ad non maxime aliquam quas. Quibusdam animi praesentium. Aliquam et laboriosam eius aut nostrum quidem aliquid dicta.
                                Et eveniet enim. Qui velit est ea dolorem doloremque deleniti aperiam unde soluta. Est cum et quod quos aut ut et sit sunt. Voluptate porro consequatur assumenda perferendis dolore.
                            </p>

                            <p>
                                Sit repellat hic cupiditate hic ut nemo. Quis nihil sunt non reiciendis. Sequi in accusamus harum vel aspernatur. Excepturi numquam nihil cumque odio. Et voluptate cupiditate.
                            </p>

                            <blockquote>
                                <p>
                                    Et vero doloremque tempore voluptatem ratione vel aut. Deleniti sunt animi aut. Aut eos aliquam doloribus minus autem quos.
                                </p>
                            </blockquote>

                            <p>
                                Sed quo laboriosam qui architecto. Occaecati repellendus omnis dicta inventore tempore provident voluptas mollitia aliquid. Id repellendus quia. Asperiores nihil magni dicta est suscipit perspiciatis. Voluptate ex rerum assumenda dolores nihil quaerat.
                                Dolor porro tempora et quibusdam voluptas. Beatae aut at ad qui tempore corrupti velit quisquam rerum. Omnis dolorum exercitationem harum qui qui blanditiis neque.
                                Iusto autem itaque. Repudiandae hic quae aspernatur ea neque qui. Architecto voluptatem magni. Vel magnam quod et tempora deleniti error rerum nihil tempora.
                            </p>

                            <h3>Et quae iure vel ut odit alias.</h3>
                            <p>
                                Officiis animi maxime nulla quo et harum eum quis a. Sit hic in qui quos fugit ut rerum atque. Optio provident dolores atque voluptatem rem excepturi molestiae qui. Voluptatem laborum omnis ullam quibusdam perspiciatis nulla nostrum. Voluptatum est libero eum nesciunt aliquid qui.
                                Quia et suscipit non sequi. Maxime sed odit. Beatae nesciunt nesciunt accusamus quia aut ratione aspernatur dolor. Sint harum eveniet dicta exercitationem minima. Exercitationem omnis asperiores natus aperiam dolor consequatur id ex sed. Quibusdam rerum dolores sint consequatur quidem ea.
                                Beatae minima sunt libero soluta sapiente in rem assumenda. Et qui odit voluptatem. Cum quibusdam voluptatem voluptatem accusamus mollitia aut atque aut.
                            </p>
                            <img src={blogInsidePost} className="img-fluid" alt=" inside blog post" />

                            <h3>Ut repellat blanditiis est dolore sunt dolorum quae.</h3>
                            <p>
                                Rerum ea est assumenda pariatur quasi et quam. Facilis nam porro amet nostrum. In assumenda quia quae a id praesentium. Quos deleniti libero sed occaecati aut porro autem. Consectetur sed excepturi sint non placeat quia repellat incidunt labore. Autem facilis hic dolorum dolores vel.
                                Consectetur quasi id et optio praesentium aut asperiores eaque aut. Explicabo omnis quibusdam esse. Ex libero illum iusto totam et ut aut blanditiis. Veritatis numquam ut illum ut a quam vitae.
                            </p>
                            <p>
                                Alias quia non aliquid. Eos et ea velit. Voluptatem maxime enim omnis ipsa voluptas incidunt. Nulla sit eaque mollitia nisi asperiores est veniam.
                            </p>

                        </div>

                        <div className="meta-bottom">
                            <i className="bi bi-folder"></i>
                            <ul className="cats">
                                <li><Link to="#">Business</Link></li>
                            </ul>

                            <i className="bi bi-tags"></i>
                            <ul className="tags">
                                <li><Link to="#">Creative</Link></li>
                                <li><Link to="#">Tips</Link></li>
                                <li><Link to="#">Marketing</Link></li>
                            </ul>
                        </div>

                    </article>

                </div>
            </section>


            <section id="blog-author" className="blog-author section">

                <div className="container">
                    <div className="author-container d-flex align-items-center">
                        <img src={blogAuthor} className="rounded-circle flex-shrink-0" alt="" />
                        <div>
                            <h4>Jane Smith</h4>
                            <div className="social-links">
                                <Link to="https://x.com/#"><i className="bi bi-twitter-x"></i></Link>
                                <Link to="https://facebook.com/#"><i className="bi bi-facebook"></i></Link>
                                <Link to="https://instagram.com/#"><i className="biu bi-instagram"></i></Link>
                            </div>
                            <p>
                                Itaque quidem optio quia voluptatibus dolorem dolor. Modi eum sed possimus accusantium. Quas repellat voluptatem officia numquam sint aspernatur voluptas. Esse et accusantium ut unde voluptas.
                            </p>
                        </div>
                    </div>
                </div>

            </section>


            <section id="blog-comments" className="blog-comments section">

                <div className="container">

                    <h4 className="comments-count">8 Comments</h4>

                    <div id="comment-1" className="comment">
                        <div className="d-flex">
                            <div className="comment-img"><img src={comments1} alt="" /></div>
                            <div>
                                <h5><Link to="">Georgia Reader</Link> <Link to="#" className="reply"><i className="bi bi-reply-fill"></i> Reply</Link></h5>
                                <time dateTime="2020-01-01">01 Jan,2022</time>
                                <p>
                                    Et rerum totam nisi. Molestiae vel quam dolorum vel voluptatem et et. Est ad aut sapiente quis molestiae est qui cum soluta.
                                    Vero aut rerum vel. Rerum quos laboriosam placeat ex qui. Sint qui facilis et.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div id="comment-2" className="comment">
                        <div className="d-flex">
                            <div className="comment-img"><img src={comments2} alt="" /></div>
                            <div>
                                <h5><Link to="">Aron Alvarado</Link> <Link to="#" className="reply"><i className="bi bi-reply-fill"></i> Reply</Link></h5>
                                <time dateTime="2020-01-01">01 Jan,2022</time>
                                <p>
                                    Ipsam tempora sequi voluptatem quis sapiente non. Autem itaque eveniet saepe. Officiis illo ut beatae.
                                </p>
                            </div>
                        </div>

                        <div id="comment-reply-1" className="comment comment-reply">
                            <div className="d-flex">
                                <div className="comment-img"><img src={comments3} alt="" /></div>
                                <div>
                                    <h5><Link to="">Lynda Small</Link> <Link to="#" className="reply"><i className="bi bi-reply-fill"></i> Reply</Link></h5>
                                    <time dateTime="2020-01-01">01 Jan,2022</time>
                                    <p>
                                        Enim ipsa eum fugiat fuga repellat. Commodi quo quo dicta. Est ullam aspernatur ut vitae quia mollitia id non. Qui ad quas nostrum rerum sed necessitatibus aut est. Eum officiis sed repellat maxime vero nisi natus. Amet nesciunt nesciunt qui illum omnis est et dolor recusandae.

                                        Recusandae sit ad aut impedit et. Ipsa labore dolor impedit et natus in porro aut. Magnam qui cum. Illo similique occaecati nihil modi eligendi. Pariatur distinctio labore omnis incidunt et illum. Expedita et dignissimos distinctio laborum minima fugiat.

                                        Libero corporis qui. Nam illo odio beatae enim ducimus. Harum reiciendis error dolorum non autem quisquam vero rerum neque.
                                    </p>
                                </div>
                            </div>

                            <div id="comment-reply-2" className="comment comment-reply">
                                <div className="d-flex">
                                    <div className="comment-img"><img src={comments4} alt="" /></div>
                                    <div>
                                        <h5><Link to="">Sianna Ramsay</Link> <Link to="#" className="reply"><i className="bi bi-reply-fill"></i> Reply</Link></h5>
                                        <time dateTime="2020-01-01">01 Jan,2022</time>
                                        <p>
                                            Et dignissimos impedit nulla et quo distinctio ex nemo. Omnis quia dolores cupiditate et. Ut unde qui eligendi sapiente omnis ullam. Placeat porro est commodi est officiis voluptas repellat quisquam possimus. Perferendis id consectetur necessitatibus.
                                        </p>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>

                    <div id="comment-3" className="comment">
                        <div className="d-flex">
                            <div className="comment-img"><img src={comments5} alt="" /></div>
                            <div>
                                <h5><Link to="">Nolan Davidson</Link> <Link to="#" className="reply"><i className="bi bi-reply-fill"></i> Reply</Link></h5>
                                <time dateTime="2020-01-01">01 Jan,2022</time>
                                <p>
                                    Distinctio nesciunt rerum reprehenderit sed. Iste omnis eius repellendus quia nihil ut accusantium tempore. Nesciunt expedita id dolor exercitationem aspernatur aut quam ut. Voluptatem est accusamus iste at.
                                    Non aut et et esse qui sit modi neque. Exercitationem et eos aspernatur. Ea est consequuntur officia beatae ea aut eos soluta. Non qui dolorum voluptatibus et optio veniam. Quam officia sit nostrum dolorem.
                                </p>
                            </div>
                        </div>

                    </div>

                    <div id="comment-4" className="comment">
                        <div className="d-flex">
                            <div className="comment-img"><img src={comments6} alt="" /></div>
                            <div>
                                <h5><Link to="">Kay Duggan</Link> <Link to="#" className="reply"><i className="bi bi-reply-fill"></i> Reply</Link></h5>
                                <time dateTime="2020-01-01">01 Jan,2022</time>
                                <p>
                                    Dolorem atque aut. Omnis doloremque blanditiis quia eum porro quis ut velit tempore. Cumque sed quia ut maxime. Est ad aut cum. Ut exercitationem non in fugiat.
                                </p>
                            </div>
                        </div>

                    </div>

                </div>

            </section>
            <section id="comment-form" className="comment-form section">
                <div className="container">

                    <form action="">

                        <h4>Post Comment</h4>
                        <p>Your email address will not be published. Required fields are marked * </p>
                        <div className="row">
                            <div className="col-md-6 form-group">
                                <input name="name" type="text" className="form-control" placeholder="Your Name*" />
                            </div>
                            <div className="col-md-6 form-group">
                                <input name="email" type="text" className="form-control" placeholder="Your Email*" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col form-group">
                                <input name="website" type="text" className="form-control" placeholder="Your Website" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col form-group">
                                <textarea name="comment" className="form-control" placeholder="Your Comment*"></textarea>
                            </div>
                        </div>

                        <div className="text-center">
                            <button type="submit" className="btn btn-primary">Post Comment</button>
                        </div>

                    </form>

                </div>
            </section>

        </div>
    )
}

export default BlogDetailsSection;