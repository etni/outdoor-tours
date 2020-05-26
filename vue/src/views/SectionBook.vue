<template>
       <section class="section-book">
        <div class="row">
          <div class="book">
              <div class="book__form">
                <div class="mb-medium">
                  <h2 class="heading-secondary">
                    Start booking now
                  </h2>
                </div>
                <form action="#" class="form">
                  <div class="form__group">
                    <input type="text" class="form__input" placeholder="Full Name" id='name' required>
                    <label for="name" class="form__label">Full name</label>
                  </div>
                  <div class="form__group">
                    <input type="email" class="form__input" placeholder="Email address" id='email' required>
                    <label for="email" class="form__label">Email address</label>
                  </div>
                  <div class="form__group mb-medium">
                     <div class="form__radio-group">
                       <input type="radio" name='size' class="form__radio-input" id="small">
                       <label for="small" class="form__radio-label">
                        <span class="form__radio-button"></span> 
                        Small tour group</label>
                     </div>
                     <div class="form__radio-group">
                      <input type="radio" name='size' class="form__radio-input" id="large">
                      <label for="large" class="form__radio-label">
                        <span class="form__radio-button"></span> 
                        Large tour group</label>
                    </div>
                  </div>
                  <div class="form__group">
                     
                  </div>
                  <div class="form__group">
                    <button class="btn btn--green">Next Step &rarr;</button>
                  </div>
                </form>
              </div>
          </div>
        </div>
      </section>   
</template>