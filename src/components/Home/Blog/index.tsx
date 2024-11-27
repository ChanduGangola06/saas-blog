import SectionHeader from "@/components/Common/SectionHeader";

const Blog = async () => {
    return (
        <section className='overflow-hidden py-17.5 lg:py-22.5 xl:py-27.5'
            id='blog'>
                {/* <!-- section title --> */}
                <SectionHeader title={"Latest Blogs & News"}
                    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent condimentum dictum euismod malesuada lacus, non consequat quam.'
                />
                <div className='mx-auto w-full max-w-[1170px] px-4 sm:px-8 xl:px-0'>
                    <div className='grid grid-cols-1 gap-7.5 sm:grid-cols-2 lg:grid-cols-3'>
                        {/* <!-- blog item --> */}
                        
                        
                    </div>
                </div>
        </section>

    );
}

export default Blog;