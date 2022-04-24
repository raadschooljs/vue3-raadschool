<template>
    <div class="grid-container">
        <div class="grid-x grid-padding-x">
            <div class="medium-6 cell">
                <input type="text" name="title" id="title" placeholder="pls type" v-model="taskTitle">
                <textarea name="desc" id="desc" cols="30" rows="3" placeholder="task info" v-model="taskDesc"></textarea>
            </div>
            <div class="medium-6 cell">
                <button class="submit success button" @click="addTask()" v-if="taskTitle.length > 0">add</button>
                <button :class="['submit button toggleInfo',{primary:showDesc},{success:!showDesc}]" @click="showDesc = !showDesc">toggle info</button>
            </div>
        </div>
        <div class="grid-x grid-padding-x">
            <ul class="list-group ">
                <li :class="['list-group-item',{done:job.completed}]" v-for="(job,i) in doList" :key="i" @click="job.completed = !job.completed">
                    {{job.title}}
                    
                    <br>
                    <small v-if="showDesc">
                        {{job.desc}}
                    </small>

                    <img src="icons/trash.svg" alt="trash" @click="removeItem()">sdfsdf
                </li>
                
                </ul>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.list-group {
    margin-bottom: 1rem;
    border: 1px solid #e6e6e6;
    border-radius: 0;
    background: #fefefe;
    box-shadow: none;
    overflow: hidden;
    color: #0a0a0a;
  }
  
  .list-group > :last-child {
    margin-bottom: 0;
  }
  
  .list-group-item img {
    width: 20px;
    float: right;
  }
  .list-group-item {
    padding: 1rem;
    border-bottom: 1px solid #e6e6e6;
  }
  
  .list-group-item > :last-child {
    margin-bottom: 0;
    border-bottom: none;
  }
  
  .list-group-item.active {
    color: #fefefe;
    background-color: #1779ba;
    border-color: 1px solid #1779ba;
  }
  
  .list-group-item:hover, .list-group-item:focus {
    background-color: #e6e6e6;
    cursor: pointer;
  }
  
  .list-group-item:hover.active, .list-group-item:focus.active {
    background-color: #1779ba;
  }
  
  .list-group-item.disabled, .list-group-item.disabled:hover, .list-group-item.disabled:focus, .list-group-item[disabled], .list-group-item[disabled]:hover, .list-group-item[disabled]:focus {
    color: #8a8a8a;
    cursor: not-allowed;
    background-color: #fefefe;
  }
  
.done {
  text-decoration: line-through;
  background-color: lightgreen;
}

textarea {
  resize: none;
}

.toggleInfo {
  margin-left: 15px;
}
</style>