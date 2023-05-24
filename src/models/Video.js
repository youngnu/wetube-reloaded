import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
    title: { type: String, trim: true, required: true },
    description: { type: String, trim: true, requried: true },
    createdAt: { tyep: Date, default: Date },
    hashtags: [{ type: String }],
    meta: {
        views: { type: Number, default: 0, required: true },
        rating: { type: Number, default: 0, required: true }
    },
});

videoSchema.static("formatHastags", function(hashtags){
  return hashtags.split(",").map((word)=>(word.startsWith("#")? word : `#${word}`))  
});

const Video = mongoose.model("Video", videoSchema);

export default Video; 