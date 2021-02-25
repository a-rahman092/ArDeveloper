import React from 'react';
import {
  MDBContainer,
  
  MDBCarouselInner,
  MDBCarouselItem,
  MDBTestimonial,
  MDBAvatar,
  MDBIcon
} from 'mdbreact';

const AboutSec = () => {
  return (
    <MDBContainer>
      <section className='text-center my-5'>
        <h2 className='h1-responsive font-weight-bold my-5'>Testimonials</h2>

        
          <MDBCarouselInner>
            <MDBCarouselItem itemId='1'>
              <MDBTestimonial>
                <MDBAvatar className='mx-auto mb-4'>
                  <img
                    src='https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg'
                    className='rounded-circle img-fluid'
                    alt=''
                  />
                </MDBAvatar>
                <p>
                  <MDBIcon icon='quote-left' /> Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit. Quod eos id officiis hic tenetur
                  quae quaerat ad velit ab. Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit. Dolore cum accusamus eveniet
                  molestias voluptatum inventore laboriosam labore sit,
                  aspernatur praesentium iste impedit quidem dolor veniam.
                </p>
                <h4 className='font-weight-bold'>Anna Deynah</h4>
                <h6 className='font-weight-bold my-3'>Founder at ET Company</h6>
                <MDBIcon icon='star' className='blue-text' />
                <MDBIcon icon='star' className='blue-text' />
                <MDBIcon icon='star' className='blue-text' />
                <MDBIcon icon='star' className='blue-text' />
                <MDBIcon far icon='star-half' className='blue-text' />
              </MDBTestimonial>
            </MDBCarouselItem>
            
          </MDBCarouselInner>
        
      </section>
    </MDBContainer>
  );
};

export default AboutSec;