import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
    author: {
      type: String,
      required: true,
      maxlength: 100
    },
    text: {
      type: String,
      required: true,
      maxlength: 1000
    },
    date: {
      type: Date,
      default: Date.now
    }
  });


const BlogSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true,
        trim: true,
        maxlength: 200
      },
      author: {
        type: String,
        required: true,
        maxlength: 100
      },
      body: {
        type: String,
        required: true,
        maxlength: 10000
      },
      summary: {
        type: String,
        maxlength: 500
      },
      tags: {
        type: [String],
        index: true
      },
      category: {
        type: String,
        required: true,
        enum: ['Technology', 'Health', 'Finance', 'Lifestyle', 'Education', 'Other'],
        default: 'Other'
      },
      comments: [CommentSchema],
      created_at: {
        type: Date,
        default: Date.now,
        immutable: true
      },
      updated_at: {
        type: Date,
        default: Date.now
      },
      published: {
        type: Boolean,
        default: false
      },
      published_at: {
        type: Date
      },
      slug: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
      },
      thumbnail: {
        type: String,
        required: true,
        validate: {
          validator: function(v) {
            return /^(http|https):\/\/[^ "]+$/.test(v);
          },
          message: props => `${props.value} is not a valid URL!`
        }
      }

});

const Blog = mongoose.models.Blog || mongoose.model('Blog', BlogSchema);

export default Blog;