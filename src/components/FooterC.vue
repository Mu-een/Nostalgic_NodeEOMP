<!-- <template>
    <footer class="text-center container-fluid justify-content-center d-flex align-items-center">&copy; Nostalgic.co 2023</footer>
</template>

<script>
    export default {
        name: 'FooterC'
    }
</script>

<style scoped>
footer {
    font-family: monospace;
    font-size: 20px;
    color: #fcd900;
    text-shadow: 1.5px 1.5px 1.5px black;
}
</style> -->

<template>
    <footer style="background-color: #FCD900;">
        <div class="container" style="padding-top: 20px;">
            <div class="row">
                <div class="col-4">
                    <h6 class="lead" style="color: #035397;">Address</h6>
                    <p style="color: black;">314 Imam Haron Rd, Lansdowne, Cape Town, 7780</p>
                    <h6 class="lead" style="color: #035397;">Contact Us</h6>
                    <p style="color: black;">0213334445</p>
                    <h6 class="lead" style="color: #035397;">Email Us</h6>
                    <p style="color: black;">info@nostalgic.com</p>
                </div>
                <div class="col-4">
                    <h6 class="lead" style="color: #035397;">Quick Links</h6>
                    <a class="quick" href="/">Home</a>
                    <a class="quick" href="/admin">Admin</a>
                    <a class="quick" href="/products">Shop</a>
                    <a class="quick" href="/register">Register</a>
                    <a class="quick" href="/login">Login</a>
                    <a class="quick" href="/contact">Contact Us</a>
                </div>
                <div class="col-4">
                    <div class="lead">
                        <h6 class="lead" style="color: #035397;">Follow Nostalgic</h6>
                        <a id="socials" target="_blank" href="https://www.instagram.com/instagram/"
                            class="fa-brands fa-instagram text-dark"></a>
                        <a id="socials" target="_blank" href="https://www.facebook.com/facebook/"
                            class="fa-brands fa-facebook text-dark"></a>
                        <a id="socials" target="_blank" href="https://twitter.com/twitter/"
                            class="fa-brands fa-twitter text-dark"></a>
                        <a id="socials" target="_blank" href="https://www.youtube.com/channel/@youtube"
                            class="fa-brands fa-youtube text-dark"></a>
                        <a id="socials" target="_blank" href="https://www.tiktok.com/@tiktok"
                            class="fa-brands fa-tiktok text-dark"></a>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-6">
                <p class="lead" style="color: #035397;">
                    <img class="partners" src="https://i.postimg.cc/zG2PsWWh/nostalgic.png">
                    &copy; 2023 Nostalgic | All Rights Reserved
                </p>
            </div>
            <div class="col-6">
                <p class="lead" style="color: #035397;">Sponsored By
                    <img class="partners" src="https://i.postimg.cc/XYBHW9qR/lifechoices.png">
                    <img class="partners" src="https://i.postimg.cc/gcy12FDs/activ8.png">
                    <img class="partners" src="https://i.postimg.cc/QML6dVWH/dotify.png">
                </p>
            </div>
        </div>
    </footer>
</template>
<script>
export default {
    name: 'FooterComponent'
}
</script>
<style scoped>
#socials {
    text-decoration: none;
    padding: 10px;
    display: block;
}

footer {
    padding-top: 20px;
    padding-bottom: 10px;
    box-shadow: 0px 0 19px rgba(1, 0, 0, 0.9);
    width: 100%;
}

.quick {
    display: block;
    padding: 5px;
    color: black;
}

.partners {
    width: 5em;
}</style>







