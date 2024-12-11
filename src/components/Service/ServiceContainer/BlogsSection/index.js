import React from 'react';
import { Link } from 'react-router-dom';

import blog1 from '../../../../images/blog/blog-1.jpg';
import blog2 from '../../../../images/blog/blog-2.jpg';
import blog3 from '../../../../images/blog/blog-3.jpg';
import blog4 from '../../../../images/blog/blog-4.jpg';


const BlogsSection = () => {
    return (
        <div className="col-lg-8">


            <section id="blog-posts" className="blog-posts section">

                <div className="container">

                    <div className="row gy-4">

                        <div className="col-12">
                            <article>

                                <div className="post-img">
                                    <img src={blog1} alt="" className="img-fluid" />
                                </div>

                                <h2 className="title">
                                    <Link to="blog-details.html">Dolorum optio tempore voluptas dignissimos cumque fuga qui quibusdam quia</Link>
                                </h2>

                                <div className="meta-top">
                                    <ul>
                                        <li className="d-flex align-items-center"><i className="bi bi-person"></i> <Link to="blog-details.html">John Doe</Link></li>
                                        <li className="d-flex align-items-center"><i className="bi bi-clock"></i> <Link to="blog-details.html"><time dateTime="2022-01-01">Jan 1, 2022</time></Link></li>
                                        <li className="d-flex align-items-center"><i className="bi bi-chat-dots"></i> <Link to="blog-details.html">12 Comments</Link></li>
                                    </ul>
                                </div>

                                <div className="content">
                                    <p>
                                        Similique neque nam consequuntur ad non maxime aliquam quas. Quibusdam animi praesentium. Aliquam et laboriosam eius aut nostrum quidem aliquid dicta.
                                        Et eveniet enim. Qui velit est ea dolorem doloremque deleniti aperiam unde soluta. Est cum et quod quos aut ut et sit sunt. Voluptate porro consequatur assumenda perferendis dolore.
                                    </p>

                                    <div className="read-more">
                                        <Link to="blog-details.html">Read More</Link>
                                    </div>
                                </div>

                            </article>
                        </div>

                        <div className="col-12">

                            <article>

                                <div className="post-img">
                                    <img src={blog2} alt="" className="img-fluid" />
                                </div>

                                <h2 className="title">
                                    <Link to="blog-details.html">Nisi magni odit consequatur autem nulla dolorem</Link>
                                </h2>

                                <div className="meta-top">
                                    <ul>
                                        <li className="d-flex align-items-center"><i className="bi bi-person"></i> <Link to="blog-details.html">John Doe</Link></li>
                                        <li className="d-flex align-items-center"><i className="bi bi-clock"></i> <Link to="blog-details.html"><time dateTime="2022-01-01">Jan 1, 2022</time></Link></li>
                                        <li className="d-flex align-items-center"><i className="bi bi-chat-dots"></i> <Link to="blog-details.html">12 Comments</Link></li>
                                    </ul>
                                </div>

                                <div className="content">
                                    <p>
                                        Incidunt voluptate sit temporibus aperiam. Quia vitae aut sint ullam quis illum voluptatum et. Quo libero rerum voluptatem pariatur nam.
                                        Ad impedit qui officiis est in non aliquid veniam laborum. Id ipsum qui aut. Sit aliquam et quia molestias laboriosam. Tempora nam odit omnis eum corrupti qui aliquid excepturi molestiae. Facilis et sint quos sed voluptas. Maxime sed tempore enim omnis non alias odio quos distinctio.
                                    </p>
                                    <div className="read-more">
                                        <Link to="blog-details.html">Read More</Link>
                                    </div>
                                </div>

                            </article>

                        </div>

                        <div className="col-12">

                            <article>

                                <div className="post-img">
                                    <img src={blog3} alt="" className="img-fluid" />
                                </div>

                                <h2 className="title">
                                    <Link to="blog-details.html">Possimus soluta ut id suscipit ea ut. In quo quia et soluta libero sit sint.</Link>
                                </h2>

                                <div className="meta-top">
                                    <ul>
                                        <li className="d-flex align-items-center"><i className="bi bi-person"></i> <Link to="blog-details.html">John Doe</Link></li>
                                        <li className="d-flex align-items-center"><i className="bi bi-clock"></i> <Link to="blog-details.html"><time dateTime="2022-01-01">Jan 1, 2022</time></Link></li>
                                        <li className="d-flex align-items-center"><i className="bi bi-chat-dots"></i> <Link to="blog-details.html">12 Comments</Link></li>
                                    </ul>
                                </div>

                                <div className="content">
                                    <p>
                                        Aut iste neque ut illum qui perspiciatis similique recusandae non. Fugit autem dolorem labore omnis et. Eum temporibus fugiat voluptate enim tenetur sunt omnis.
                                        Doloremque est saepe laborum aut. Ipsa cupiditate ex harum at recusandae nesciunt. Ut dolores velit.
                                    </p>
                                    <div className="read-more">
                                        <Link to="blog-details.html">Read More</Link>
                                    </div>
                                </div>

                            </article>

                        </div>

                        <div className="col-12">

                            <article>

                                <div className="post-img">
                                    <img src={blog4} alt="" className="img-fluid" />
                                </div>

                                <h2 className="title">
                                    <Link to="blog-details.html">Non rem rerum nam cum quo minus. Dolor distinctio deleniti explicabo eius exercitationem.</Link>
                                </h2>

                                <div className="meta-top">
                                    <ul>
                                        <li className="d-flex align-items-center"><i className="bi bi-person"></i> <Link to="blog-details.html">John Doe</Link></li>
                                        <li className="d-flex align-items-center"><i className="bi bi-clock"></i> <Link to="blog-details.html"><time dateTime="2022-01-01">Jan 1, 2022</time></Link></li>
                                        <li className="d-flex align-items-center"><i className="bi bi-chat-dots"></i> <Link to="blog-details.html">12 Comments</Link></li>
                                    </ul>
                                </div>

                                <div className="content">
                                    <p>
                                        Aspernatur rerum perferendis et sint. Voluptates cupiditate voluptas atque quae. Rem veritatis rerum enim et autem. Saepe atque cum eligendi eaque iste omnis a qui.
                                        Quia sed sunt. Ea asperiores expedita et et delectus voluptates rerum. Id saepe ut itaque quod qui voluptas nobis porro rerum. Quam quia nesciunt qui aut est non omnis. Inventore occaecati et quaerat magni itaque nam voluptas. Voluptatem ducimus sint id earum ut nesciunt sed corrupti nemo.
                                    </p>
                                    <div className="read-more">
                                        <Link to="blog-details.html">Read More</Link>
                                    </div>
                                </div>

                            </article>

                        </div>

                    </div>

                </div>

            </section>


            <section id="blog-pagination" className="blog-pagination section">

                <div className="container">
                    <div className="d-flex justify-content-center">
                        <ul>
                            <li><Link to="#"><i className="bi bi-chevron-left"></i></Link></li>
                            <li><Link to="#">1</Link></li>
                            <li><Link to="#" className="active">2</Link></li>
                            <li><Link to="#">3</Link></li>
                            <li><Link to="#">4</Link></li>
                            <li>...</li>
                            <li><Link to="#">10</Link></li>
                            <li><Link to="#"><i className="bi bi-chevron-right"></i></Link></li>
                        </ul>
                    </div>
                </div>

            </section>

        </div>
    )
}

export default BlogsSection;