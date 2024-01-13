import axios from 'axios';
import { Request, Response } from 'express';
import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import catchAsync from '../../../shared/catchAsync';

const getAllCurrentMatchesData = catchAsync(
  async (req: Request, res: Response) => {
    // const scoreboardData =
    const apiResponse = await axios.get(
      'https://api.cricapi.com/v1/currentMatches',
      {
        params: {
          apikey: '8a9242f8-a2b7-44fc-adf7-20a0c02b6659',
          offset: 0,
        },
      }
    );

    const responseData = apiResponse?.data?.data;

    if (!responseData) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'Failed to get data');
    }

    res.status(httpStatus.OK).json({
      statusCode: httpStatus.OK,
      success: true,
      message: 'Cricket Current Matches data fetched successfully !',
      data: responseData,
    });
  }
);

const getAllCricketSeriesData = catchAsync(
  async (req: Request, res: Response) => {
    // const scoreboardData =
    const apiResponse = await axios.get('https://api.cricapi.com/v1/series', {
      params: {
        apikey: '8a9242f8-a2b7-44fc-adf7-20a0c02b6659',
        offset: 0,
      },
    });

    const responseData = apiResponse?.data?.data;

    if (!responseData) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'Failed to get data');
    }

    res.status(httpStatus.OK).json({
      statusCode: httpStatus.OK,
      success: true,
      message: 'Cricket Series data fetched successfully !',
      data: responseData,
    });
  }
);

export const CricketScoreboardController = {
  getAllCurrentMatchesData,
  getAllCricketSeriesData,
};
