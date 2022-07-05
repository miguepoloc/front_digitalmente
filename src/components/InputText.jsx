


<Box sx={{ '& > :not(style)': { m: 1 } }}>
    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <FaEnvelopeOpenText
            style={{ color: '#00659D', fontSize: '1.3rem', marginRight: '0.5rem', marginBottom: '6px' }} />
        <TextField
            color={Boolean(errors.email) ? 'error' : 'primary'}
            variant="standard"
            required
            fullWidth
            id="email"
            label="Correo electrónico"
            name="email"
            autoComplete="email"
            value={values.email}
            onChange={handleChange}
            error={Boolean(errors.email)}
            helperText={errors.email} />
    </Box>
</Box>