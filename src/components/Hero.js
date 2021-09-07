import React from 'react'

class Hero extends React.Component{
    render() {
        return(
            <section className='hero featuredMovies section has-bullest'>
                <div className='container'>
                    <div className='slide featured'>
                    <h2 className="featured-title">Peaky Blinders</h2>
                    <p className="featured-overview">المسلسل يدور حول البطل كالين مورفي في دور تومي شيلبي، قائد العصابة بالأضافة إلى سام نيل في دور المحقق المسؤول عن قمع العصابة. المسلسل مقتبس عن عائلة البيكي بلايندرز الحقيقية المسلسل عرض لاول مره علي بي بي سي 2 في 13 سبتمبر 2013 لمدة 6 حلقات
                    </p>
                    <p className='buttons'>
                        <a href='#' className='button is-primary'>
                            شاهد الفلم
                        </a>
                        <a href='#' className='button '>
                            أقرء المزيد
                        </a>
                    </p>
                    </div>
                </div>
            </section>
        )
    }
}

export default Hero;