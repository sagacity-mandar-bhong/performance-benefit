import { moduleMetadata, Story, Meta, componentWrapperDecorator, addDecorator } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { ServerApiInterfaceServiceService } from 'src/app/services/common/server-api-interface-service.service';
import { HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PerformaceCard1Component } from './performace-card1.component';
import { PerformanceCard1DataModel } from './performance-card1-model';
import { CommonModule, DatePipe } from '@angular/common';
import { MaterialModule } from 'src/app/materials/material.module';
import { ValidationService } from 'src/app/services/common/validation.service';

import { initializeWorker, mswDecorator } from 'msw-storybook-addon';
import { rest } from 'msw'

initializeWorker();
addDecorator(mswDecorator);




export default {
    component: PerformaceCard1Component,
    decorators: [
      moduleMetadata({
        // 👇 Imports both components to allow component composition with storybook
        declarations: [PerformaceCard1Component],
        imports: [FormsModule, HttpClientModule,    CommonModule,
          MaterialModule,
          FormsModule,
          ReactiveFormsModule ],
        providers: [FormBuilder,ServerApiInterfaceServiceService,
          DatePipe,ValidationService
        ],
      }),
      // 👇 Wraps our stories with a decorator
     // componentWrapperDecorator(story => `<div style="margin: 3em">${story}</div>`),
    ],
    excludeStories: /.*Data$/,
    title: 'PerformaceCard1Component',
  } as Meta;


export const actionsData = {
    onGetValues: action('getValues'),
};


const Template: Story<PerformaceCard1Component> = args => ({
    props: {
      ...args,
      //  onGetValues: actionsData.onGetValues,
    //   onArchiveTask: TaskStories.actionsData.onArchiveTask,

    },
  });

export const Default = Template.bind({});
Default.args = {
  isStoryBookMode:false,
  dataModel:  PerformanceCard1DataModel.getInstance(),
  configModel:  {}
};

export const SelfDataLoad = Template.bind({});
SelfDataLoad.args = {
  isStoryBookMode:false,
  dataModel:  {
    ...PerformanceCard1DataModel.getInstance(), isSelfDataLoad:true
  },
  configModel:  {}
};

export const DebugMode = Template.bind({});
DebugMode.args = {
  isStoryBookMode:true,
  dataModel:  {
    ...PerformanceCard1DataModel.getInstance(), isSelfDataLoad:true
  },
  configModel:  {}
};

export const SuccessBehavior = Template.bind({});

SuccessBehavior.args = {
  isStoryBookMode:true,
  dataModel:  {
    ...PerformanceCard1DataModel.getInstance(), isSelfDataLoad:true
  },
  configModel:  {}
};

SuccessBehavior.parameters = {
  msw: [
    rest.get('/user', (req, res, ctx) => {
      return res(
        ctx.json({
          count:"10,000",
          icon:"thumb_down",
          countColor:"#E62E2D",
          text:"Cost of Poor Planning"
        })
      )
    }),
  ],
}


