import React, { useEffect, useRef, useState } from 'react';

function JobBoard() {
  const [jobid, setJobid] = useState(() => {
    try {
      let local_jobid = JSON.parse(localStorage.getItem('all_job_ids'));
      return local_jobid || [];
    } catch {
      return [];
    }
  });

  const [jobs, setJobs] = useState(() => {
    try {
      let local_jobs = JSON.parse(localStorage.getItem('jobs'));
      return local_jobs || [];
    } catch {
      return [];
    }
  });

  const [loading, setLoading] = useState(false); // loading indicator
  const ref = useRef(jobs.length); // initial ref matches cached job count

  // Fetch all job IDs on initial page load
  useEffect(() => {
    if (jobid.length === 0) {
      const fetchJobIDs = async () => {
        try {
          const res = await fetch('https://hacker-news.firebaseio.com/v0/jobstories.json');
          const all_job_ids = await res.json();

          setJobid(all_job_ids);
          localStorage.setItem('all_job_ids', JSON.stringify(all_job_ids));

          ref.current = 0;
          load_more(all_job_ids);
        } catch (error) {
          console.error("Failed to fetch job IDs:", error);
        }
      };

      fetchJobIDs();
    }
  }, []);

  // Load next 6 jobs
  const load_more = (all_job_ids = jobid) => {
    const nextCount = ref.current + 6;
    const local_jobs = JSON.parse(localStorage.getItem('jobs')) || [];

    // If more jobs need to be fetched
    if (local_jobs.length < nextCount) {
      ref.current = nextCount;
      fetch_next_jobs(nextCount, all_job_ids);
    } else {
      ref.current = nextCount;
      setJobs(local_jobs.slice(0, nextCount));
    }
  };

  // Fetch next set of job details
  const fetch_next_jobs = async (count, all_job_ids = jobid) => {
    setLoading(true);
    const new_jobs = [];

    for (let i = count - 6; i < count; i++) {
      const id = all_job_ids[i];
      if (!id) continue;

      try {
        const res = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
        const job_detail = await res.json();
        new_jobs.push(job_detail);
      } catch (err) {
        console.warn(`Failed to fetch job ${id}`, err);
      }
    }

    const updatedJobs = [...jobs, ...new_jobs];
    setJobs(updatedJobs);
    localStorage.setItem('jobs', JSON.stringify(updatedJobs));
    setLoading(false);
  };

  return (
    <div style={{ padding: '16px' }}>
      <h1 style={{ marginBottom: '16px', fontWeight: 'bold', fontSize: '24px', color: 'orange' }}>
        Hacker News Jobs Board
      </h1>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '17px' }}>
        {jobs.map((job) => {
          const dateObj = new Date(job.time * 1000);
          const date = dateObj.toLocaleDateString();
          const time = dateObj.toLocaleTimeString();

          return (
            <div key={job.id} style={{ borderBottom: '1px solid #ccc', paddingBottom: '8px' }}>
              <h2 style={{ fontSize: '18px', fontWeight: 'bold' }}>{job.title}</h2>
              <div style={{ display: 'flex', gap: '12px', fontSize: '14px', color: '#555' }}>
                <span>By {job.by}</span>
                <span>{date}</span>
                <span>{time}</span>
              </div>
            </div>
          );
        })}
      </div>

      {loading && <p style={{ marginTop: '16px' }}>Loading...</p>}

      <button
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          backgroundColor: '#f60',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
        onClick={() => load_more()}
        disabled={loading}
      >
        Load more jobs
      </button>
    </div>
  );
}

export default JobBoard;
