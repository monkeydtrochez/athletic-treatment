<script>
    // import campaignVideo from "../../static/assets/video/campaign-video.mp4";
    // import campaignVideoMobile from "../../static/assets/video/campaign-video.webm";
    
    export let aboutAreaTexts = {};
</script>

<div class="w-full flex justify-center mb-3">
    <div class="sm:w-4/12/12 md:w-6/12 lg:w-6/12 text-gray-900 mt-6 leading-normal">
        
        <!-- <video class="w-full rounded-3xl mb-4" controls autoplay="autoplay" loop="true" muted>
            <source src="{campaignVideo}" type="video/mp4" />
            <source src="{campaignVideoMobile}" type="video/webm" />
            <track kind="captions">
            </video> -->
            
            <h1 class="mb-4 uppercase font-bold tracking-wide">{aboutAreaTexts.title}</h1>
            <p class="mx-2">{aboutAreaTexts.paragraph1}
                <br/>
                {aboutAreaTexts.paragraph2}
            </p>
        </div>
    </div>
    
    <style lang="css" scoped>
        h1 {
            @apply text-center;
        }
    </style>