<template>
    <NavbarC/>
    <div class="contact_us text-center my-5">
        <h3 class="display-5">Contact Us!</h3>
        <p>Any questions or remarks? Just write us a message</p>
    </div>
    <div class="container-fluid">
        <form action="https://formspree.io/f/xjvdvznl" method="POST" role="form" class="w-75 m-5 mx-auto text-center form">
            <div class="mb-3 row">
                <div class="col-md-6 form-group">
                    <label for="fname" class="form-label fname">First Name</label>
                    <input type="text" name="name" class="form-control" placeholder="Type your name here .." required="required" data-error="First Name is needed">
                    <div class="help-block with-errors"></div>
                </div>
                <div class="col-md-6 form-group">
                    <label for="lname" class="form-label lname">Last Name</label>
                    <input type="text" name="lastName" class="form-control" placeholder="Type your last name here .." required="required" data-error="Last is needed">
                    <div class="help-block with-errors"></div>
                </div>
         </div>
         <div class="mb-3">
           <label for="message" class="form-label msgBox">Message</label>
           <textarea class="form-control" rows="3" placeholder="Type your message here .." required="required"></textarea>
         </div>
         <div>
            <button type="submit button" class="btn btn-lg">Send</button>
         </div>
        </form>
    <FoundersCards/>
    <FooterC/>
    </div>

    
    
</template>

<script>
import NavbarC from '../components/NavbarC.vue'
import FoundersCards from '../components/FoundersCards.vue'
import FooterC from '../components/FooterC.vue'
    export default {
        name: 'ContactView',
        components : {
            NavbarC,
            FoundersCards,
            FooterC
        }
    }
</script>

<style scoped>
.contact_us {
    font-size: 25px;
}
form {
    font-family: monospace;
    font-size: 20px;
}
.btn {
    color: black;
}
.btn:hover {
    color: #fcd900;
    background-color: black;
}
</style>